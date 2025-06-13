import React from "react";
import tieuchuan from "../../img/tieuchuan.png";

const tieuchuanList = [
	{
		icon: "📇",
		text: "Mang theo chứng minh nhân dân/hộ chiếu",
	},
	{
		icon: "🦠",
		text: "Không mắc hoặc không có các hành vi nguy cơ lây nhiễm HIV, không nhiễm viêm gan B, viêm gan C, và các virus lây qua đường truyền máu",
	},
	{
		icon: "💉",
		text: "Không nghiện ma túy, rượu bia và các chất kích thích",
	},
	{
		icon: "⚖️",
		text: "Cân nặng: Nam ≥ 45 kg Nữ ≥ 45 kg",
	},
	{
		icon: "💓",
		text: "Không mắc các bệnh mãn tính hoặc cấp tính về tim mạch, huyết áp, hô hấp, dạ dày…",
	},
	{
		icon: "🩸",
		text: "Chỉ số huyết sắc tố (Hb) ≥120g/l (≥125g/l nếu hiến từ 350ml trở lên).",
	},
	{
		icon: "🔞",
		text: "Người khỏe mạnh trong độ tuổi từ đủ 18 đến 60 tuổi",
	},
	{
		icon: "📅",
		text: "Thời gian tối thiểu giữa 2 lần hiến máu là 12 tuần đối với cả Nam và Nữ",
	},
	{
		icon: "🧪",
		text: "Kết quả test nhanh âm tính với kháng nguyên bề mặt của siêu vi B",
	},
];

const Tieuchuan = () => {
	return (
		<div
			style={{
				minHeight: "10vh",
				background: "#1565c0", // Đổi màu khung xanh
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "40px 0",
			}}
		>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "400px 1fr",
					gap: "32px",
					width: "1500px",
					maxWidth: "1500px",
				}}
			>
				{/* Hình ảnh với tiêu đề đè lên */}
				<div
					style={{
						position: "relative",
						width: "100%",
						height: "320px",
						minHeight: 180,
						maxHeight: 320,
					}}
				>
					<img
						src={tieuchuan}
						alt="Tiêu chuẩn"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: 16,
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							background: "#fff",
							display: "block",
						}}
					/>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "flex-start", // căn trái
							alignItems: "flex-start",     // căn sát trên
							color: "#21589F",
							fontWeight: 700,
							fontSize: "32px", // giảm từ 40px xuống 32px
							lineHeight: 1.1,
							textAlign: "left",            // căn trái chữ
							background: "rgba(255,255,255,0.0)",
							zIndex: 2,
							padding: "24px",
							letterSpacing: 1,
							userSelect: "none",
						}}
					>
						{/* Chữ nằm sát trên và bên trái hình */}
						TIÊU CHUẨN THAM<br />GIA HIẾN MÁU
					</div>
				</div>
				{/* Grid các tiêu chí */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "24px",
					}}
				>
					{tieuchuanList.map((item, idx) => (
						<div
							key={idx}
							style={{
								background: "#fff",
								borderRadius: 12,
								padding: "24px 18px",
								display: "flex",
								alignItems: "flex-start",
								gap: "16px",
								boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
								minHeight: 100,
							}}
						>
							<span
								style={{
									fontSize: "32px",
									background: "#1565c0", // Đổi màu icon nền xanh
									color: "#fff",
									borderRadius: 8,
									padding: "12px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									minWidth: 40,
									minHeight: 40,
								}}
							>
								{item.icon}
							</span>
							<span
								style={{
									fontSize: "18px",
									color: "#222",
									minWidth: 0,
								}}
							>
								{item.text}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tieuchuan;