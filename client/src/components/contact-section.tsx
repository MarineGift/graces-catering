import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your inquiry!",
        description: "We will contact you within 24 hours to discuss your event details.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-in">
          <div className="section-divider mb-8"></div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold luxury-text-gradient mb-8">
            Plan Your Perfect Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to create an unforgettable culinary experience? Get in touch with us to discuss your event requirements and receive a personalized quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fade-in">
            <div className="luxury-card rounded-3xl p-10 shadow-lg">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-luxury-charcoal">
                Get Your Free Quote
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John" 
                              {...field} 
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Doe" 
                              {...field} 
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john.doe@example.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="(540) 270-8044" 
                            {...field} 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Date</FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              {...field}
                              value={field.value || ""} 
                              data-testid="input-event-date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Guests</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                            <FormControl>
                              <SelectTrigger data-testid="select-guest-count">
                                <SelectValue placeholder="Select guest count" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="10-25">10-25 guests</SelectItem>
                              <SelectItem value="26-50">26-50 guests</SelectItem>
                              <SelectItem value="51-100">51-100 guests</SelectItem>
                              <SelectItem value="101-200">101-200 guests</SelectItem>
                              <SelectItem value="200+">200+ guests</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                          <FormControl>
                            <SelectTrigger data-testid="select-event-type">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="private">Private Party</SelectItem>
                            <SelectItem value="holiday">Holiday Celebration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Details & Special Requests</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your event, menu preferences, dietary restrictions, or any special requests..." 
                            rows={4}
                            {...field}
                            value={field.value || ""} 
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="btn-luxury w-full" 
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "Submitting..." : "Request Free Quote"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="fade-in">
            <div className="luxury-card rounded-3xl p-10 shadow-lg mb-8">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-luxury-charcoal">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-charcoal mb-1">Phone</h4>
                    <p className="text-muted-foreground">(540) 270-8044</p>
                    <p className="text-sm text-muted-foreground">Call or text for immediate assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-charcoal mb-1">Email</h4>
                    <p className="text-muted-foreground">graceswlim@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-charcoal mb-1">Address</h4>
                    <p className="text-muted-foreground">81 Broadview Ave</p>
                    <p className="text-muted-foreground">Warrenton, VA 20186</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-charcoal mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Sunday</p>
                    <p className="text-muted-foreground">By appointment</p>
                    <p className="text-sm text-muted-foreground">Flexible scheduling for events</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="luxury-card rounded-3xl p-10 border-2 border-luxury-pink/20">
              <h4 className="font-heading text-xl font-semibold mb-4 text-luxury-charcoal">
                Why Choose Grace's Catering?
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="luxury-pink font-bold">•</span>
                  <span>Professional service with attention to detail</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="luxury-pink font-bold">•</span>
                  <span>Fresh, high-quality ingredients</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="luxury-pink font-bold">•</span>
                  <span>Customizable menus for any event</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="luxury-pink font-bold">•</span>
                  <span>Full-service event support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="luxury-pink font-bold">•</span>
                  <span>Competitive pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
