import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SettingsProvider } from './components/SettingsContext';
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from './components/ScrollToTop';
import NavItems from './components/NavItems';
import SEO from './components/SEO';
import NotFound from '@/pages/generic/NotFound'; // Adjust path as necessary


// Define your routes here
export const routes = [];

const queryClient = new QueryClient();

const App = () => {
  const navItems = NavItems();
  
  // Build routes from navItems, ignoring items with disabled: 1
  navItems.forEach(item => {
    // Check if the main item is disabled (disabled: 1 means skip)
    if (item.disabled !== 1) {
      if (item.subItems) {
        item.subItems.forEach(subItem => {
          // Check if the sub-item is disabled (disabled: 1 means skip)
          if (subItem.disabled !== 1) {
            routes.push({
              path: subItem.to,
              element: (
                <>
                  <SEO title={subItem.pageTitle} description={subItem.pageDesc} />
                  {subItem.page}
                </>
              ),
            });
          }
        });
      } else {
        routes.push({
          path: item.to,
          element: (
            <>
              <SEO title={item.pageTitle} description={item.pageDesc} />
              {item.page}
            </>
          ),
        });
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <HelmetProvider>
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <TooltipProvider>
              <Toaster />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                  ))}
                  {/* Catch-all route for unmatched paths */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </ThemeProvider>
        </HelmetProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
};

export default App;
