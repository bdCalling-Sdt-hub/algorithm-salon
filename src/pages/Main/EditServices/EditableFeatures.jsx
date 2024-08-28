import React, { useEffect, useState } from "react";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const FeatureComponent = ({ initialFeatures = [], onFeaturesChange }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(initialFeatures);
  }, [initialFeatures]);

  useEffect(() => {
    if (onFeaturesChange) {
      onFeaturesChange(features);
    }
  }, [features, onFeaturesChange]);

  const handleFeatureChange = (index, event) => {
    const newFeatures = [...features];
    newFeatures[index] = event.target.value;
    setFeatures(newFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setFeatures(newFeatures);
  };

  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <Input
            type="text"
            value={feature}
            onChange={(event) => handleFeatureChange(index, event)}
            placeholder="Feature"
            style={{ width: "99%" }}
            className="p-4 bg-primary border-2 border-secondary rounded mt-[12px]"
          />
          {features.length > 1 && (
            <MinusCircleOutlined
              onClick={() => removeFeature(index)}
              className=" dynamic-delete-button"
            />
          )}
        </div>
      ))}
      <div className="flex justify-center">
        <Button
          type="dashed"
          onClick={addFeature}
          block
          icon={<PlusOutlined />}
          className="block w-[500px] h-[56px] mt-[30px] px-2 py-4 text-text bg-primary"
        >
          Add Feature
        </Button>
      </div>
    </>
  );
};

export default FeatureComponent;
