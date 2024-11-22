import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { Card } from "primereact/card";

export const DataForm = () => {
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
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
    <Card className="w-full max-w-2xl mx-auto shadow-lg p-2 my-4">
      <h2 className="text-xl font-bold mb-2">User Details and CSV Upload</h2>
      <p className="text-sm text-gray-600 mb-6">
        Please fill in your details and upload a CSV file.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <InputText
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-inputtext-sm"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="area" className="font-semibold">
            Area
          </label>
          <InputTextarea
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Describe your area"
            rows={3}
            className="w-full p-inputtextarea-sm"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-inputtext-sm"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="csv-file" className="font-semibold">
            Upload CSV File
          </label>
          <input
            id="csv-file"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        {file && (
          <Message
            severity="info"
            text={`Selected File: ${file.name}`}
            className="my-2"
          />
        )}

        {error && <Message severity="error" text={error} className="my-2" />}

        {success && (
          <Message
            severity="success"
            text="Your form has been successfully submitted."
            className="my-2"
          />
        )}

        <Button
          type="submit"
          label="Submit Form"
          className="w-full p-button-sm"
        />
      </form>
    </Card>
  );
};
