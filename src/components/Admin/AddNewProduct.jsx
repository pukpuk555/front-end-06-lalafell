import React, { useState } from 'react';

const AddNewProduct = () => {
    const [productImages, setProductImages] = useState([]);
    const [selectedAspectRatio, setSelectedAspectRatio] = useState("1:1");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const images = files.map((file) => ({
            url: URL.createObjectURL(file),
            aspectRatio: selectedAspectRatio
        }));
        setProductImages([...productImages, ...images]);
    };

    const handleAspectRatioChange = (aspectRatio) => {
        setSelectedAspectRatio(aspectRatio);
    };

    const handleCancel = () => {
        setProductImages([]);
        setSelectedAspectRatio("1:1");
        setProductName("");
        setCategory("");
        setProductDescription("");
    };

    return (
        <div className="container mx-auto mt-40 w-[60%] p-4">
            <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block mb-2">Product Images</label>
                    <div className="flex flex-wrap">
                        {productImages.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={`Product ${index}`}
                                className={`w-72 ${image.aspectRatio === "1:1" ? 'h-72' : 'h-96'} object-cover m-2 border border-gray-300`}
                            />
                        ))}
                    </div>
                    <input type="file" multiple onChange={handleImageUpload} className="mt-2 mb-2" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Select Aspect Ratio:</label>
                    <div className="flex mb-2">
                        <label className="mr-4">
                            <input
                                type="radio"
                                value="1:1"
                                checked={selectedAspectRatio === "1:1"}
                                onChange={() => handleAspectRatioChange("1:1")}
                                className="mr-1"
                            />
                            1:1
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="3:4"
                                checked={selectedAspectRatio === "3:4"}
                                onChange={() => handleAspectRatioChange("3:4")}
                                className="mr-1"
                            />
                            3:4
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Product Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Product Description</label>
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    ></textarea>
                </div>
                <div className="flex">
                    <button
                        className="bg-black text-white p-2 rounded mr-2 hover:bg-black/80"
                    >
                        Save and Publish
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;

