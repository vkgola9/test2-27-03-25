import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardSection = ({ items }) => (
  <section className="mb-12">
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>{item.content}</CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default CardSection;
