import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm dòng này

const data = [
	{
		title: "Ai có thể tham gia hiến máu?",
		content: [
			"Tất cả mọi người từ 18 - 60 tuổi, thực sự tình nguyện hiến máu của mình để cứu chữa người bệnh.",
			"Cân nặng ít nhất là 45kg đối với phụ nữ, nam giới. Lượng máu hiến mỗi lần không quá 9ml/kg cân nặng và không quá 500ml mỗi lần.",
			"Không bị nhiễm hoặc không có các hành vi lây nhiễm HIV và các bệnh lây nhiễm qua đường truyền máu khác.",
			"Thời gian giữa 2 lần hiến máu là 12 tuần đối với cả Nam và Nữ.",
			"Có giấy tờ tùy thân.",
		],
	},
	{
		title: "Ai là người không nên hiến máu?",
		content: [
			"Người mắc các bệnh truyền nhiễm như viêm gan B, C, HIV/AIDS, giang mai...",
			"Phụ nữ đang mang thai, cho con bú hoặc trong kỳ kinh nguyệt.",
			"Người có tiền sử bệnh tim mạch, huyết áp, tiểu đường, ung thư...",
			"Người vừa phẫu thuật hoặc đang điều trị bệnh cấp tính.",
		],
	},
	{
		title: "Máu của tôi sẽ được làm những xét nghiệm gì?",
		content: [
			"Xét nghiệm nhóm máu ABO và Rh.",
			"Xét nghiệm các bệnh lây truyền qua đường máu như HIV, viêm gan B, viêm gan C, giang mai, sốt rét...",
			"Xét nghiệm kiểm tra các chỉ số an toàn khác theo quy định của Bộ Y tế.",
		],
	},
];

const LuuY = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const navigate = useNavigate(); // Thêm dòng này

	return (
		<div
			style={{
				padding: 32,
				maxWidth: 800,
				margin: "0 auto", // Giảm margin trên xuống 0
				borderRadius: 12,
				fontFamily: "Segoe UI, Arial, sans-serif",
			}}
		>
			<h2
				style={{
					color: "#21589F",
					fontWeight: 700,
					fontSize: 40,
					marginBottom: 32,
					marginTop: 0, // Thêm dòng này để loại bỏ margin trên của tiêu đề
					textAlign: "center",
					letterSpacing: 1,
					textTransform: "uppercase", // Thêm dòng này để in hoa
				}}
			>
				Lưu ý quan trọng
			</h2>

			{data.map((item, idx) => (
				<div
					key={idx}
					style={{
						border: "1.5px solid #b3d1f7",
						borderRadius: 12,
						background: "#fff",
						marginBottom: 20,
						boxShadow: "0 1px 6px rgba(33,88,159,0.04)",
						transition: "box-shadow 0.2s",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							cursor: "pointer",
							padding: "22px 28px",
						}}
						onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
					>
						<span
							style={{
								color: "#21589F",
								fontWeight: 600,
								fontSize: 22,
								letterSpacing: 0.5,
								textAlign: "left",
							}}
						>
							{item.title}
						</span>
						<span style={{ fontSize: 22, color: "#888" }}>
							{openIndex === idx ? "▲" : "▼"}
						</span>
					</div>
					<div
						style={{
							maxHeight: openIndex === idx ? 1000 : 0,
							overflow: "hidden",
							transition:
								"max-height 0.8s cubic-bezier(0.4,0,0.2,1), padding 0.8s cubic-bezier(0.4,0,0.2,1)",
							padding: openIndex === idx ? "16px 40px 18px 40px" : "0 40px",
							background: openIndex === idx ? "#f8fbff" : "#fff",
							textAlign: "left",
						}}
					>
						<ul
							style={{
								fontSize: 18,
								color: "#222",
								lineHeight: 1.7,
								margin: 0,
								opacity: openIndex === idx ? 1 : 0,
								transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
								paddingLeft: 0,
								listStyle: "none",
							}}
						>
							{item.content.map((c, i) => (
								<li key={i} style={{ marginBottom: 16 }}>
									<span
										style={{
											display: "inline-block",
											minWidth: 12,
											marginRight: 8,
											color: "#21589F",
											fontWeight: 700,
										}}
									>
										-
									</span>
									{c}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}

			{/* Nút xem thêm */}
			<div style={{ textAlign: "center", marginTop: 16 }}>
				<button
					style={{
						background: "#21589F",
						color: "#fff",
						border: "none",
						borderRadius: 6,
						padding: "10px 28px",
						fontSize: 18,
						fontWeight: 600,
						cursor: "pointer",
						boxShadow: "0 1px 4px rgba(33,88,159,0.08)",
						transition: "background 0.2s",
					}}
					onClick={() => navigate("/hoidap")} // Thêm dòng này
				>
					Xem thêm &gt;&gt;
				</button>
			</div>
		</div>
	);
};

export default LuuY;