import React, { useState , useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceAreas from '../../components/ServiceAreas';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSettings } from '../../components/SettingsContext';
import CTASection from '../../page_components/CTASection';

const Contact = () => {
  const settings = useSettings();
  const [formData, setFormData] = useState({name: "", email: "", phone: "", message: "", none: ""});
  const [startTime, setStartTime] = useState(null);

  // Track when the form loads to measure the time taken to submit
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const showAlert = (msg) => {
    const message = document.getElementById('message');
    message.textContent = msg;
    message.style.display = 'block';
    
    setTimeout(() => {
      message.style.display = 'none';
      message.textContent = '';
    }, 3000);
  }; 

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value, }));
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const elapsedTime = (Date.now() - startTime) / 1000;
    if ( elapsedTime < settings.BotDetectInterval ) {
      return;
    }

    try {
      //IMPORTANT - "/sem" doesn't work in "dev" as .htaccess is not used
      const response = await fetch("/sem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showAlert("Form submitted successfully!");
      } else {
        const responseData = await response.json();
        //alert(responseData.Error);
        showAlert(responseData.Error);
        console.log('Response from server:', responseData);
      }
    } catch (error) {
      //console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-dark-900">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Contact Us</h1>
        <img src="/img/cc-c.webp" alt="Contact" className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-lg" width="1920" height="855"/>
      
        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Free Quote</h2>
            <p className="mb-4 dark:text-dark-300">
              Have questions about our services or need to schedule an appointment? We're here to help. Fill out the form below, and one of our representatives will get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <Input name="name" type="text" placeholder="Your Name" className="dark:bg-dark-700 dark:text-dark-white" value={formData.name} onChange={handleInputChange} autoComplete="name"/>
              <Input name="email" type="email" placeholder="Your Email" className="dark:bg-dark-700 dark:text-dark-white" value={formData.email} onChange={handleInputChange} autoComplete="email"/>
              <Input name="phone" type="tel" placeholder="Your Phone" className="dark:bg-dark-700 dark:text-dark-white" value={formData.phone} onChange={handleInputChange} autoComplete="phone"/>
              <Textarea name="message" placeholder="Your Message" className="dark:bg-dark-700 dark:text-dark-white" value={formData.message} onChange={handleInputChange}/>
              <Button name="send" type="submit" className="btn-gradient" onClick={handleSubmit}>Send Message</Button>
              <Input type="text" name="none" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div id="message" style={{ display: 'none' }}></div>
              </form>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Contact Information</h2>
            <Card className="mb-4 dark:bg-dark-800">
              <CardHeader>
                <CardTitle className="dark:text-dark-white">Phone</CardTitle>
              </CardHeader>
              <CardContent className="dark:text-dark-300">
                <p>Office: <a href={"tel:"+settings.PhoneNo} className="hover:text-accent transition-colors">{settings.PhoneNo}</a></p>
                <p>Emergency: <a href={"tel:"+settings.EmergencyPhoneNo} className="hover:text-accent transition-colors">{settings.EmergencyPhoneNo}</a></p>
              </CardContent>
            </Card>
            <Card className="mb-4 dark:bg-dark-800">
              <CardHeader>
                <CardTitle className="dark:text-dark-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="dark:text-dark-300">
                <a href={"mailto:"+settings.Email} className="hover:text-accent transition-colors">
                  <p>{settings.Email}</p>
                </a>
              </CardContent>
            </Card>
            <Card className="dark:bg-dark-800">
              <CardHeader>
                <CardTitle className="dark:text-dark-white">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="dark:text-dark-300">
                <p>{settings.BusinessHours.Schedule1}</p>
                <p>{settings.BusinessHours.Schedule2}</p>
                <p>{settings.BusinessHours.Schedule3}</p>
                <p className="mt-2 font-semibold">Emergency Services Available</p>
              </CardContent>
            </Card>
          </section>
        </div>

        <ServiceAreas 
          sectionClassName='py-8 dark:bg-dark-900' headingClassName='text-4xl font-bold mb-8 text-center gradient-text' 
          paragraphClassName='text-xl mb-4 text-center dark:text-dark-300' />
        <CTASection 
          title='Emergency Service' 
          description="We understand that HVAC emergencies can happen at any time. That's why we offer emergency services to our valued customers" 
          buttonText='Call Now for Emergency Service' buttonLink={"tel:"+settings.PhoneNo} />
        <br/>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
