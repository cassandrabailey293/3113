import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Message sent! We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-white mb-4">Book 3113</h2>
        <p className="text-gray-300 mb-6">
          Ready to bring the energy to your event? Fill out the form and we'll get back to you 
          with availability and pricing.
        </p>

        <div className="space-y-4">
          <Card className="bg-zinc-900/50 border-zinc-800 p-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="text-white">Email</p>
                <a href="mailto:booking@3113band.com" className="text-gray-400 hover:text-red-500 transition-colors">
                  booking@3113band.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 p-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="text-white">Phone</p>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-red-500 transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 p-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="text-white">Based In</p>
                <p className="text-gray-400">Los Angeles, CA</p>
                <p className="text-gray-400 text-sm">Available for regional and national bookings</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* <Card className="bg-zinc-900/50 border-zinc-800 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-white">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="eventType" className="text-white">Event Type</Label>
            <Select value={formData.eventType} onValueChange={(value) => handleChange("eventType", value)}>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="festival">Music Festival</SelectItem>
                <SelectItem value="venue">Bar/Club Venue</SelectItem>
                <SelectItem value="private">Private Event</SelectItem>
                <SelectItem value="corporate">Corporate Event</SelectItem>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="date" className="text-white">Event Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-white">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              className="bg-zinc-800 border-zinc-700 text-white min-h-[120px]"
              placeholder="Tell us about your event..."
            />
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </Card> */}
    </div>
  );
}
