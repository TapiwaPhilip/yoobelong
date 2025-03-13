
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
    setIsFormOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-yoogray-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Seniors having fun together"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white/90">
              Building Communities for Young Seniors in Germany
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Creating Vibrant Communities
              <span className="block">Where You Truly Belong</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
              YOOBELONG creates dynamic local communities centered on shared
              services, activities, and events designed specifically for young
              seniors in Germany.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-yooblue-500 hover:bg-yooblue-600 text-white rounded-lg px-6 py-6 text-lg"
                size="lg"
                onClick={() => setIsFormOpen(!isFormOpen)}
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {isFormOpen && (
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 animate-in fade-in-50 slide-in-from-top-5">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your email address"
                              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <textarea
                              placeholder="Your message"
                              className="w-full rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/60 px-3 py-2 min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-yooblue-500 hover:bg-yooblue-600 text-white"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
};

export default HomeHero;
