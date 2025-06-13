import React, { useState, useEffect, useRef } from 'react';
import quyenloi1 from '../../img/quyenloi1.png';
import quyenloi2 from '../../img/quyenloi2.png';

const contents = [
  {
    title: 'Được bồi dưỡng trực tiếp',
    body: (
      <div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>
            Ăn nhẹ, nước uống tại chỗ: tương đương 30.000 đồng (1 chai trà xanh không độ, 01 hộp chocopie 66gram, 01 hộp bánh Goute 35,5gram).
          </li>
          <li>Hỗ trợ chi phí đi lại (bằng tiền mặt): 50.000 đồng.</li>
          <li>
            Nhận phần quà tặng giá trị tương đương:
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>100.000₫ khi hiến máu 250ml</li>
              <li>150.000₫ khi hiến máu 350ml</li>
              <li>180.000₫ khi hiến máu 450ml</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Được tư vấn về sức khoẻ',
    body: (
      <div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Được giải thích về quy trình hiến máu và các tai biến có thể xảy ra trong và sau khi hiến máu.</li>
          <li>Được cung cấp thông tin về dấu hiệu, triệu chứng do nhiễm vi rút viêm gan, HIV và một số bệnh lây qua đường truyền máu, tình dục khác.</li>
          <li>Được xét nghiệm sàng lọc một số vi rút lây qua đường truyền máu, tình dục (HIV, Giang mai, viêm gan,...) sau khi hiến máu.</li>
          <li>Được tư vấn hướng dẫn cách chăm sóc sức khỏe, tư vấn về kết quả bất thường sau hiến máu.</li>
          <li>Được bảo mật về kết quả khám lâm sàng, kết quả xét nghiệm.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Được cấp Giấy chứng nhận hiến máu tình nguyện',
    body: (
      <div>
        <ol style={{ margin: 0, paddingLeft: 18 }}>
          <li>Giấy chứng nhận được trao cho người hiến máu sau mỗi lần hiến máu tình nguyện.</li>
          <li>Có giá trị để được truyền máu miễn phí bằng số lượng máu đã hiến, khi bản thân người hiến có nhu cầu sử dụng máu tại tất cả các cơ sở y tế công lập trên toàn quốc.</li>
          <li>Người hiến máu cần xuất trình Giấy chứng nhận để làm cơ sở cho các cơ sở y tế thực hiện việc truyền máu miễn phí.</li>
          <li>Cơ sở y tế có trách nhiệm ký, đóng dấu, xác nhận số lượng máu đã truyền miễn phí cho người hiến máu vào giấy chứng nhận.</li>
        </ol>
      </div>
    ),
  },
];

const SLIDE_DURATION = 500; // ms

const QuyenLoi = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('right'); // Thêm state hướng
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const handlePrev = () => {
    if (animating) return;
    setDirection('left'); // Đặt hướng sang trái
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + contents.length) % contents.length);
      setAnimating(false);
    }, SLIDE_DURATION);
  };

  const handleNext = () => {
    if (animating) return;
    setDirection('right'); // Đặt hướng sang phải
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % contents.length);
      setAnimating(false);
    }, SLIDE_DURATION);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: '40px 0',
        gap: 0,
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 1000, // Khóa chiều rộng cố định
          minWidth: 1000,
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        <div style={{ position: 'relative', maxWidth: 500, width: '100%', display: 'flex', flexDirection: 'column', marginRight: '-4px' }}>
          <img
            src={quyenloi1}
            alt="Quyền lợi 1"
            style={{
              maxWidth: 500,
              width: '100%',
              height: '100%',
              borderRadius: '12px 0 0 12px',
              boxShadow: '0 2px 12px #dde6f2',
              marginLeft: 0,
              display: 'block',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 24,
              left: 0,
              right: 0, // thêm dòng này
              width: '100%',
              color: '#fff',
              textAlign: 'left',
              textShadow: '0 2px 8px #0008',
              fontWeight: 'bold',
              fontSize: 24,
              lineHeight: 1.3,
              padding: '0 20px', // giảm padding nếu cần
              pointerEvents: 'none',
              boxSizing: 'border-box', // thêm dòng này
            }}
          >
            <div
              style={{
                color: '#1565c0',
                textTransform: 'uppercase',
                fontWeight: 900,
                letterSpacing: 1,
                fontSize: 26,
                textShadow: 'none',
              }}
            >
              Quyền lợi của người hiến máu
            </div>
            <div style={{ fontWeight: 800, fontSize: 18, marginTop: 8 }}>
              Người hiến máu tình nguyện sẽ được những quyền lợi sau:
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', maxWidth: 500, width: '100%', display: 'flex', flexDirection: 'column' }}>
          <img
            src={quyenloi2}
            alt="Quyền lợi 2"
            style={{
              maxWidth: 500,
              width: '100%',
              height: '100%',
              borderRadius: '0 12px 12px 0',
              boxShadow: '0 2px 12px #dde6f2',
              marginLeft: 0,
              display: 'block',
              objectFit: 'cover',
            }}
          />
          {/* Nút trái */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: 16,
              bottom: 16,
              top: 'auto',
              transform: 'none',
              zIndex: 2,
              background: '#4571a880',
              border: 'none',
              borderRadius: 12,
              width: 38,
              height: 48,
              cursor: 'pointer',
              fontSize: 22,
              fontWeight: 700,
              color: '#fff',
              boxShadow: '0 2px 8px #0002',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              outline: 'none',
              opacity: 0.85,
            }}
            disabled={animating}
            aria-label="Trước"
          >
            &#60;
          </button>
          {/* Nút phải */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: 16,
              bottom: 16,
              top: 'auto',
              transform: 'none',
              zIndex: 2,
              background: '#4571a880',
              border: 'none',
              borderRadius: 12,
              width: 38,
              height: 48,
              cursor: 'pointer',
              fontSize: 22,
              fontWeight: 700,
              color: '#fff',
              boxShadow: '0 2px 8px #0002',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              outline: 'none',
              opacity: 0.85,
            }}
            disabled={animating}
            aria-label="Sau"
          >
            &#62;
          </button>
          <div
            style={{
              position: 'absolute',
              top: 24,
              left: 0,
              width: '100%',
              color: '#fff',
              textAlign: 'left',
              textShadow: '0 2px 8px #0008',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 1.6,
              padding: '0 32px',
              pointerEvents: 'none',
              letterSpacing: 0.2,
              maxWidth: 500,
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              overflow: 'hidden',
              minHeight: 220,
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: 800,
                letterSpacing: 0.5,
                fontSize: 22,
                textShadow: 'none',
                marginBottom: 6,
                transition: `transform ${SLIDE_DURATION}ms cubic-bezier(.7,0,.3,1), opacity ${SLIDE_DURATION}ms`,
                // Hiệu ứng trái/phải
                transform: animating
                  ? direction === 'left'
                    ? 'translateX(100%)'
                    : 'translateX(-100%)'
                  : 'translateX(0)',
                opacity: animating ? 0 : 1,
                width: '100%',
                background: 'transparent',
                pointerEvents: 'none',
                lineHeight: 1.3,
                paddingRight: 0,
                paddingLeft: 0,
                position: 'relative',
                boxSizing: 'border-box',
              }}
              key={index}
            >
              {contents[index].title}
              <div style={{
                fontWeight: 400,
                fontSize: 17,
                marginTop: 8,
                textTransform: 'none',
                color: '#fff',
                letterSpacing: 0,
                textShadow: 'none',
                lineHeight: 1.8,
                padding: 0,
                textAlign: 'justify',
                wordBreak: 'break-word',
              }}>
                <div>
                  {contents[index].body}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuyenLoi;