import useEvent from "@/hooks/useEvent";
import React, { useEffect, useRef } from "react";
import QrCode from "qrcode";
import { Elastic, gsap } from "gsap";

type Particle = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  speed: number;
  color: string;
};

const QrcodeParticle: React.FC<{ code: string }> = (props) => {
  const { code } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draw = useEvent(async (code: string) => {
    const particles: Particle[] = [];
    let renderComplete = false;

    const qrcodeCanvas = await QrCode.toCanvas(code, {
      width: 180,
      errorCorrectionLevel: "H",
    });
    const qrcodeCtx = qrcodeCanvas.getContext("2d")!;
    const data = qrcodeCtx.getImageData(
      0,
      0,
      qrcodeCanvas.width,
      qrcodeCanvas.height
    );
    qrcodeCtx.clearRect(0, 0, qrcodeCanvas.width, qrcodeCanvas.height);

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    function render() {
      if (renderComplete) return;
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0, j = particles.length; i < j; i++) {
        const particle = particles[i];
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x1 * 2, particle.y1 * 2, 2, 2);
      }
    }
    for (let y = 0, y2 = data.height; y < y2; y++) {
      for (let x = 0, x2 = data.width; x < x2; x++) {
        const particle = {
          x0: x,
          y0: y,
          x1: canvas.width / 4,
          y1: canvas.height / 4,
          color:
            "rgb(" +
            data.data[y * 4 * data.width + x * 4] +
            "," +
            data.data[y * 4 * data.width + x * 4 + 1] +
            "," +
            data.data[y * 4 * data.width + x * 4 + 2] +
            ")",
          speed: Math.random() * 4 + 2,
        };
        gsap
          .to(particle, particle.speed, {
            x1: particle.x0,
            y1: particle.y0,
            delay: y / 30,
            ease: Elastic.easeOut,
            onComplete:
              particles.length === data.height * data.width - 1
                ? () => {
                    setTimeout(() => {
                      renderComplete = true;
                    }, 300);
                  }
                : undefined,
          })
          .timeScale(4);
        particles.push(particle);
      }
    }
    requestAnimationFrame(render);
  });
  useEffect(() => {
    if (!code) return;
    draw(code);
  }, [code]);
  return <canvas width={360} height={360} ref={canvasRef}></canvas>;
};

export default QrcodeParticle;
