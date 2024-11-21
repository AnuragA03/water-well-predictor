"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

export default () => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    setError(null);
    setSuccess(false);

    if (selectedFile) {
      if (
        selectedFile.type === "text/csv" ||
        selectedFile.name.endsWith(".csv")
      ) {
        setFile(selectedFile);
      } else {
        setFile(null);
        setError("Please select a valid CSV file.");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name || !area || !email) {
      setError("Please fill in all fields.");
      return;
    }

    if (!file) {
      setError("Please select a CSV file.");
      return;
    }

    // Here you would typically send the form data and file to your server
    // For this example, we'll simulate a submission with a timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate submission time
      setSuccess(true);
      setName("");
      setArea("");
      setEmail("");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>User Details and CSV Upload</CardTitle>
        <CardDescription>
          Please fill in your details and upload a CSV file.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Area</Label>
            <Textarea
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Describe your area"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="csv-file">Upload CSV File</Label>
            <Input
              id="csv-file"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              ref={fileInputRef}
              required
            />
          </div>

          {file && (
            <Alert>
              <Upload className="h-4 w-4" />
              <AlertTitle>Selected File</AlertTitle>
              <AlertDescription>{file.name}</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert
              variant="default"
              className="bg-green-100 text-green-800 border-green-300"
            >
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your form has been successfully submitted.
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full">
            Submit Form
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
