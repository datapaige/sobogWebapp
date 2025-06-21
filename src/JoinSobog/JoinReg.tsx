import React, { useState } from "react";
import "./JoinCop.css"

interface FormDataType {
  surname: string;
  firstName: string;
  phone: string;
  email: string;
  address: string;
  sex: string;
  maritalStatus: string;
  dob: string;
  idScan: File | null;
}

const JoinReg: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    surname: "",
    firstName: "",
    phone: "",
    email: "",
    address: "",
    sex: "",
    maritalStatus: "",
    dob: "",
    idScan: null,
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  if (e.target instanceof HTMLInputElement && e.target.type === "file") {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="join-cooperative">
      <h1>Join Our Co-operative Society</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required />
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />

        <select name="sex" value={formData.sex} onChange={handleChange} required>
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
          <option value="">Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Upload Scan ID</label>
        <input type="file" name="idScan" accept="image/*,application/pdf" onChange={handleChange} required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JoinReg;
