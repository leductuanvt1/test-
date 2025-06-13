import React, { useState, useEffect, useRef } from "react";
import LienHe from "../trangchu/LienHe";

// Hàm thêm tiền tố "Nhóm máu: " nếu là tên nhóm máu
function addPrefixToBloodTypes(data) {
  const specialCases = [
    "Tất cả các nhóm máu",
    "Chỉ O-",
    "Chỉ AB+"
  ];
  const bloodTypePattern = /^(A|B|AB|O)[+-]$/;

  const newData = {};
  for (const component in data) {
    newData[component] = {};
    for (const type in data[component]) {
      const entry = data[component][type];
      const newEntry = { ...entry };
      if (Array.isArray(entry.canDonateTo)) {
        newEntry.canDonateTo = entry.canDonateTo.map(val =>
          specialCases.includes(val) || val.startsWith("Nhóm máu:") ? val
            : bloodTypePattern.test(val) ? `Nhóm máu: ${val}` : val
        );
      }
      if (Array.isArray(entry.canReceiveFrom)) {
        newEntry.canReceiveFrom = entry.canReceiveFrom.map(val =>
          specialCases.includes(val) || val.startsWith("Nhóm máu:") ? val
            : bloodTypePattern.test(val) ? `Nhóm máu: ${val}` : val
        );
      }
      newData[component][type] = newEntry;
    }
  }
  return newData;
}

// Áp dụng hàm cho compatibilityData
const compatibilityData = addPrefixToBloodTypes({
  "whole-blood": {
    "A+": { canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"] },
    "A-": { canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"] },
    "B+": { canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"] },
    "B-": { canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"] },
    "AB+": { canDonateTo: ["AB+"], canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
    "AB-": { canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "AB-", "O-"] },
    "O+": { canDonateTo: ["A+", "B+", "AB+", "O+"], canReceiveFrom: ["O+", "O-"] },
    "O-": { canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], canReceiveFrom: ["O-"] }
  },
  "red-cells": {
    "A+": { canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"] },
    "A-": { canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"] },
    "B+": { canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"] },
    "B-": { canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"] },
    "AB+": { canDonateTo: ["AB+"], canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
    "AB-": { canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "AB-", "O-"] },
    "O+": { canDonateTo: ["A+", "B+", "AB+", "O+"], canReceiveFrom: ["O+", "O-"] },
    "O-": { canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], canReceiveFrom: ["O-"] }
  },
  plasma: {
    "A+": { canDonateTo: ["A+", "A-", "O+", "O-"], canReceiveFrom: ["A+", "AB+"] },
    "A-": { canDonateTo: ["A-", "O-"], canReceiveFrom: ["A+", "A-", "AB+", "AB-"] },
    "B+": { canDonateTo: ["B+", "B-", "O+", "O-"], canReceiveFrom: ["B+", "AB+"] },
    "B-": { canDonateTo: ["B-", "O-"], canReceiveFrom: ["B+", "B-", "AB+", "AB-"] },
    "AB+": { canDonateTo: ["Tất cả các nhóm máu"], canReceiveFrom: ["Chỉ AB+"] },
    "AB-": { canDonateTo: ["A-", "B-", "AB-", "O-"], canReceiveFrom: ["AB+", "AB-"] },
    "O+": { canDonateTo: ["O+", "O-"], canReceiveFrom: ["A+", "B+", "AB+", "O+"] },
    "O-": { canDonateTo: ["Chỉ O-"], canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] }
  },
  platelets: {
    "A+": {
      canDonateTo: ["A+", "AB+"],
      canReceiveFrom: ["A+", "A-", "O+", "O-"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    },
    "A-": {
      canDonateTo: ["A+", "A-", "AB+", "AB-"],
      canReceiveFrom: ["A-", "O-"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    },
    "B+": {
      canDonateTo: ["B+", "AB+"],
      canReceiveFrom: ["B+", "B-", "O+", "O-"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    },
    "B-": {
      canDonateTo: ["B+", "B-", "AB+", "AB-"],
      canReceiveFrom: ["B-", "O-"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    },
    "AB+": {
      canDonateTo: ["AB+"],
      canReceiveFrom: ["Tất cả các nhóm máu"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    },
    "AB-": {
      canDonateTo: ["AB+", "AB-"],
      canReceiveFrom: ["A-", "B-", "AB-", "O-"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    },
    "O+": {
      canDonateTo: ["A+", "B+", "AB+", "O+"],
      canReceiveFrom: ["O+", "O-"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    },
    "O-": {
      canDonateTo: ["Tất cả các nhóm máu"],
      canReceiveFrom: ["O-"],
      note: "Ưu tiên cùng nhóm ABO, nhưng không bắt buộc trong trường hợp khẩn cấp"
    }
  }
});

const componentDescriptions = {
  "whole-blood":
    "Máu toàn phần bao gồm hồng cầu, huyết tương và tiểu cầu. Tuân theo quy tắc tương thích nhóm máu ABO và Rh.",
  "red-cells":
    "Hồng cầu vận chuyển oxy. Tuân thủ nghiêm ngặt quy tắc tương thích nhóm máu ABO và Rh.",
  plasma:
    "Huyết tương chứa protein và kháng thể. Quy tắc tương thích ngược với hồng cầu.",
  platelets:
    "Tiểu cầu giúp đông máu. Ưu tiên cùng nhóm ABO nhưng không bắt buộc trong trường hợp khẩn cấp."
};

const componentDisplayNames = {
  "whole-blood": "Máu toàn phần",
  "red-cells": "Hồng cầu",
  plasma: "Huyết tương",
  platelets: "Tiểu cầu"
};

const bloodTypes = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-"
];

const TuongThich = () => {
  const [component, setComponent] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    if (showResults && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showResults]);

  const handleComponentChange = (e) => {
    setComponent(e.target.value);
    setShowResults(false);
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!component || !bloodType) {
      alert("Vui lòng chọn thành phần máu và nhóm máu.");
      return;
    }
    const data = compatibilityData[component][bloodType];
    setResults(data);
    setShowResults(true);
  };

  return (
    <>
      <div
        className="compatibility-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 32,
          borderRadius: 12,
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}
      >
        <h1
          style={{
            color: "#21589F",
            fontWeight: 700,
            fontSize: 40,
            marginBottom: 32,
            marginTop: 0,
            textAlign: "center",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Tra cứu tương thích nhóm máu
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            maxWidth: 800,
            margin: "0 auto",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          Hiểu về sự tương thích nhóm máu là rất quan trọng để truyền máu an toàn. Điền thông tin bên dưới để kiểm tra tương thích cho từng thành phần máu.
        </p>

        <form className="compatibility-form" style={{
          background: "white", padding: "2rem", borderRadius: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginBottom: "2rem", maxWidth: 800, marginLeft: "auto", marginRight: "auto"
        }} onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="bloodComponent" style={{ display: "block", marginBottom: "0.5rem", color: "#333", fontWeight: 600, fontSize: "1.1rem" }}>
              Chọn thành phần máu
            </label>
            <select
              id="bloodComponent"
              name="bloodComponent"
              required
              value={component}
              onChange={handleComponentChange}
              style={{
                width: "100%", padding: "0.8rem", border: "2px solid #ddd", borderRadius: 8, fontSize: "1rem", color: "#333", backgroundColor: "white", cursor: "pointer"
              }}
            >
              <option value="">Chọn thành phần máu...</option>
              <option value="whole-blood">Máu toàn phần</option>
              <option value="red-cells">Hồng cầu</option>
              <option value="plasma">Huyết tương</option>
              <option value="platelets">Tiểu cầu</option>
            </select>
            <div className="select-description" style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
              {component && componentDescriptions[component]}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="bloodType" style={{ display: "block", marginBottom: "0.5rem", color: "#333", fontWeight: 600, fontSize: "1.1rem" }}>
              Chọn nhóm máu
            </label>
            <select
              id="bloodType"
              name="bloodType"
              required
              value={bloodType}
              onChange={handleBloodTypeChange}
              style={{
                width: "100%", padding: "0.8rem", border: "2px solid #ddd", borderRadius: 8, fontSize: "1rem", color: "#333", backgroundColor: "white", cursor: "pointer"
              }}
            >
              <option value="">Chọn nhóm máu của bạn...</option>
              {bloodTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-button" style={{
            backgroundColor: "#ff4d4d", color: "white", padding: "1rem 2rem", border: "none", borderRadius: 8, fontSize: "1.1rem", fontWeight: 600, cursor: "pointer", width: "100%", marginTop: "1rem"
          }}>
            Kiểm tra tương thích
          </button>
        </form>

        {showResults && results && (
          <div className="compatibility-results" ref={resultsRef} style={{
            background: "white", padding: "2rem", borderRadius: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginTop: "2rem", maxWidth: 800, marginLeft: "auto", marginRight: "auto"
          }}>
            <div className="results-header" style={{ textAlign: "center", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "2px solid #eee" }}>
              <h2 style={{ color: "#333", fontSize: "1.8rem", marginBottom: "0.5rem" }}>Kết quả tương thích</h2>
              <div className="selected-info" style={{ color: "#666", fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Đang tra cứu <span style={{ color: "#ff4d4d", fontWeight: 600 }}>{componentDisplayNames[component]}</span> với nhóm máu <span style={{ color: "#ff4d4d", fontWeight: 600 }}>{bloodType}</span>
              </div>
            </div>
            <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              <div className="result-card" style={{ background: "#fff5f5", padding: "1.5rem", borderRadius: 8, border: "2px solid #ff4d4d", marginBottom: "1rem" }}>
                <h3 style={{ color: "#ff4d4d", marginBottom: "1rem", fontSize: "1.3rem" }}>Có thể cho</h3>
                <ul style={{ listStyle: "none", marginTop: "1rem" }}>
                  {results.canDonateTo.map((type, idx) => (
                    <li key={idx} style={{ marginBottom: "0.5rem", paddingLeft: "1.5rem", position: "relative", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="blood-type" style={{ fontWeight: 600, color: "#333" }}>{type}</span>
                    </li>
                  ))}
                  {results.note && (
                    <li className="compatibility-note" style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic" }}>{results.note}</li>
                  )}
                </ul>
              </div>
              <div className="result-card" style={{ background: "#fff5f5", padding: "1.5rem", borderRadius: 8, border: "2px solid #ff4d4d", marginBottom: "1rem" }}>
                <h3 style={{ color: "#ff4d4d", marginBottom: "1rem", fontSize: "1.3rem" }}>Có thể nhận từ</h3>
                <ul style={{ listStyle: "none", marginTop: "1rem" }}>
                  {results.canReceiveFrom.map((type, idx) => (
                    <li key={idx} style={{ marginBottom: "0.5rem", paddingLeft: "1.5rem", position: "relative", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="blood-type" style={{ fontWeight: 600, color: "#333" }}>{type}</span>
                    </li>
                  ))}
                  {results.note && (
                    <li className="compatibility-note" style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic" }}>{results.note}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        <table className="compatibility-table" style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          margin: "2rem 0",
          background: "white",
          boxShadow: "0 8px 32px rgba(33,88,159,0.15), 0 1.5px 8px rgba(33,88,159,0.07)", // xanh đậm
          borderRadius: 18,
          overflow: "hidden",
          border: "2.5px solid #21589F", // xanh đậm
          transition: "box-shadow 0.3s"
        }}>
          <thead>
            <tr>
              <th style={{
                background: "#60a5fa",
                color: "white",
                fontWeight: 700,
                padding: "1.2rem",
                fontSize: "1.15rem",
                border: "none",
                letterSpacing: 1,
                textShadow: "0 1px 2px rgba(0,0,0,0.07)",
                borderRight: "2px solid #fff" // thêm đường ngăn phải
              }}>
                Nhóm máu
              </th>
              <th style={{
                background: "#60a5fa",
                color: "white",
                fontWeight: 700,
                padding: "1.2rem",
                fontSize: "1.15rem",
                border: "none",
                letterSpacing: 1,
                textShadow: "0 1px 2px rgba(0,0,0,0.07)",
                borderRight: "2px solid #fff" // thêm đường ngăn phải
              }}>
                Có thể cho
              </th>
              <th style={{
                background: "#60a5fa",
                color: "white",
                fontWeight: 700,
                padding: "1.2rem",
                fontSize: "1.15rem",
                border: "none",
                letterSpacing: 1,
                textShadow: "0 1px 2px rgba(0,0,0,0.07)"
              }}>
                Có thể nhận từ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: "#fff9f9", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F", borderBottom: "1.5px solid #ffeaea" }}>A+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>A+, AB+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>A+, A-, O+, O-</td>
            </tr>
            <tr style={{ background: "#f7fafd", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F", borderBottom: "1.5px solid #ffeaea" }}>A-</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>A+, A-, AB+, AB-</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>A-, O-</td>
            </tr>
            <tr style={{ background: "#fff9f9", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F", borderBottom: "1.5px solid #ffeaea" }}>B+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>B+, AB+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>B+, B-, O+, O-</td>
            </tr>
            <tr style={{ background: "#f7fafd", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F", borderBottom: "1.5px solid #ffeaea" }}>B-</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>B+, B-, AB+, AB-</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>B-, O-</td>
            </tr>
            <tr style={{ background: "#fff9f9", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F", borderBottom: "1.5px solid #ffeaea" }}>AB+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>Chỉ AB+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>Tất cả các nhóm máu</td>
            </tr>
            <tr style={{ background: "#f7fafd", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F", borderBottom: "1.5px solid #ffeaea" }}>AB-</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>AB+, AB-</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>A-, B-, AB-, O-</td>
            </tr>
            <tr style={{ background: "#fff9f9", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F", borderBottom: "1.5px solid #ffeaea" }}>O+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>A+, B+, AB+, O+</td>
              <td className="compatible" style={{ padding: "1.1rem", borderBottom: "1.5px solid #ffeaea" }}>O+, O-</td>
            </tr>
            <tr style={{ background: "#f7fafd", transition: "background 0.2s" }}>
              <td style={{ padding: "1.1rem", fontWeight: 600, color: "#21589F" }}>O-</td>
              <td className="compatible" style={{ padding: "1.1rem" }}>Tất cả các nhóm máu</td>
              <td className="compatible" style={{ padding: "1.1rem" }}>Chỉ O-</td>
            </tr>
          </tbody>
        </table>

        <div className="info-box" style={{
          background: "rgba(96,165,250,0.08)",
          padding: "2rem",
          borderRadius: 12,
          border: "2px solid #60a5fa",
          boxShadow: "0 4px 20px rgba(56,161,105,0.1)",
          textAlign: "left",
          maxWidth: 800, // hoặc 800, 900 tuỳ ý bạn
          margin: "2rem auto" // căn giữa và có khoảng cách trên dưới
        }}>
          <h3 style={{ color: "#2f855a", marginBottom: "1.5rem", fontSize: "1.5rem", textAlign: "center" }}>Lưu ý về các thành phần máu</h3>
          <ul style={{ listStyle: "none" }}>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              - Máu toàn phần: Bao gồm tất cả thành phần máu và tuân theo quy tắc tương thích ABO, Rh
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              - Hồng cầu: Tuân thủ nghiêm ngặt quy tắc tương thích ABO và Rh
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              - Huyết tương: Quy tắc tương thích ngược với hồng cầu (AB nhận được từ tất cả, O chỉ nhận từ O)
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              - Tiểu cầu: Ưu tiên cùng nhóm ABO nhưng không bắt buộc trong trường hợp khẩn cấp
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              - Bệnh nhân Rh âm nên nhận thành phần máu Rh âm
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              - Luôn tham khảo ý kiến chuyên gia y tế khi truyền máu
            </li>
          </ul>
        </div>
      </div>
     
      <LienHe />
    </>
  );
};

export default TuongThich;