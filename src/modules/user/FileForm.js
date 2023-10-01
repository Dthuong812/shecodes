import React, { useState } from 'react';

const FileForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    type: '',
    symptom: '',
    gluco: '',
    blood: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="height">
            Chiều cao (cm)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="weight">
            Cân nặng (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="grade">
            Type tiểu đường
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="block">
            Biến chứng
          </label>
          <input
            type="text"
            id="block"
            name="block"
            value={formData.block}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="achievement">
            Chỉ số huyết áp gần nhất
          </label>
          <input
            type="text"
            id="achievement"
            name="achievement"
            value={formData.achievement}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="achievement">
            Chỉ số  đường huyết gần nhất
          </label>
          <input
            type="text"
            id="achievement"
            name="achievement"
            value={formData.achievement}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default FileForm;