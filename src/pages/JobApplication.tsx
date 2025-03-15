
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload } from "lucide-react";
import { toast } from "sonner";

const JobApplication = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Convert job ID back to title format
  const jobTitle = jobId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted successfully!", {
        description: "We'll review your application and get back to you soon.",
      });
      navigate("/careers");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/careers")}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Careers
          </Button>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Apply for: {jobTitle}</CardTitle>
              <CardDescription>
                Complete the form below to apply for this position. Fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV *</Label>
                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-center flex-col gap-2 text-center p-4">
                      <Upload size={24} className="text-gray-400" />
                      <p className="text-sm font-medium">
                        Drag & drop your file here or click to browse
                      </p>
                      <p className="text-xs text-gray-500">
                        Accepted formats: PDF, DOCX, TXT (Max 5MB)
                      </p>
                      <Input 
                        id="resume" 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.docx,.txt" 
                        required
                      />
                      <Button 
                        variant="outline" 
                        size="sm" 
                        type="button"
                        onClick={() => document.getElementById('resume')?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coverletter">Cover Letter</Label>
                  <Textarea 
                    id="coverletter" 
                    placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                    className="min-h-[150px]"
                  />
                </div>
                
                <CardFooter className="flex justify-end px-0 pt-4">
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplication;
