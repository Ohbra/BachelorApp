"use client";

export function DirectBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0f0f2e]">
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0f0f2e;
          z-index: -10;
        }

        .blob1 {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 60%;
          height: 60%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 225, 93, 1) 0%,
            rgba(255, 225, 93, 0) 70%
          );
          filter: blur(40px);
          opacity: 0.7;
          animation: blob-move 15s ease-in-out infinite alternate;
        }

        .blob2 {
          position: absolute;
          bottom: 10%;
          right: 10%;
          width: 50%;
          height: 50%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(157, 141, 241, 1) 0%,
            rgba(157, 141, 241, 0) 70%
          );
          filter: blur(40px);
          opacity: 0.6;
          animation: blob-move 15s ease-in-out infinite alternate-reverse;
        }

        @keyframes blob-move {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(5%, 5%) scale(1.1);
          }
          66% {
            transform: translate(-5%, -5%) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>
      <div className="background">
        <div className="blob1"></div>
        <div className="blob2"></div>
      </div>
    </div>
  );
}
