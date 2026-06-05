import { useEffect, useRef, useState } from "react";
import { ArrowClockwise, Pause, Play } from "@phosphor-icons/react";

// 站内交互动画播放器：把一个纯函数式 draw(ctx,t,w,h) 动画包装成可播放/暂停/重播的“视频”。
// 用于课程详情页主视觉位与首页课程卡的弹出模态。
export function ExplainerPlayer({ explainer, poster, label }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const barRef = useRef(null);
  const rafRef = useRef(0);
  const elapsedRef = useRef(0);
  const lastRef = useRef(0);
  const playingRef = useRef(false);
  const dimsRef = useRef({ w: 0, h: 0 });

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [caption, setCaption] = useState(explainer.captions[0]?.text ?? "");

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 画布尺寸自适应容器（含 DPR），并重绘当前帧。
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");
    function resize() {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dimsRef.current = { w: r.width, h: r.height };
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const prog = (elapsedRef.current % explainer.duration) / explainer.duration;
      explainer.draw(ctx, prog, r.width, r.height);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    return () => ro.disconnect();
  }, [explainer]);

  // 动画主循环：仅在播放时推进时钟、绘制并同步字幕与进度条。
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    function frame(now) {
      if (playingRef.current) {
        const { w, h } = dimsRef.current;
        elapsedRef.current += (now - lastRef.current) / 1000;
        const prog = (elapsedRef.current % explainer.duration) / explainer.duration;
        explainer.draw(ctx, prog, w, h);
        if (barRef.current) barRef.current.style.width = `${prog * 100}%`;
        let active = explainer.captions[0];
        for (const c of explainer.captions) if (prog >= c.at) active = c;
        setCaption(active.text);
      }
      lastRef.current = now;
      rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [explainer]);

  function start() {
    setStarted(true);
    if (reduce) {
      // 降低动效：直接绘制一帧有代表性的静态画面，不进入动画循环。
      const ctx = canvasRef.current.getContext("2d");
      const { w, h } = dimsRef.current;
      explainer.draw(ctx, 0.85, w, h);
      const last = explainer.captions[explainer.captions.length - 1];
      setCaption(last?.text ?? "");
      return;
    }
    lastRef.current = performance.now();
    playingRef.current = true;
    setPlaying(true);
  }

  function toggle() {
    playingRef.current = !playingRef.current;
    setPlaying(playingRef.current);
    lastRef.current = performance.now();
  }

  function restart() {
    elapsedRef.current = 0;
    lastRef.current = performance.now();
    playingRef.current = true;
    setPlaying(true);
  }

  return (
    <div className="explainer" ref={wrapRef}>
      <canvas ref={canvasRef} className="explainer-canvas" />

      {!started && (
        <button
          className="explainer-poster"
          type="button"
          onClick={start}
          style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        >
          <span className="explainer-play"><Play weight="fill" /></span>
          {label && <span className="explainer-label">{label}</span>}
        </button>
      )}

      {started && (
        <>
          <p className="explainer-caption">{caption}</p>
          {!reduce && (
            <div className="explainer-controls">
              <button type="button" onClick={toggle} aria-label={playing ? "暂停" : "播放"}>
                {playing ? <Pause weight="fill" /> : <Play weight="fill" />}
              </button>
              <div className="explainer-bar"><span ref={barRef} /></div>
              <button type="button" onClick={restart} aria-label="重播">
                <ArrowClockwise weight="bold" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
