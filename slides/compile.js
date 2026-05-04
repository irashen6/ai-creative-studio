const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: '000814',
  secondary: '003566',
  accent: 'ffd60a',
  light: '001d3d',
  bg: '000814'
};

function createSlide01(pres, theme) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });
  slide.addText("AI Creative Studio", {
    x: 0.6, y: 1.8, w: 9, h: 1.2,
    fontSize: 60, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "left"
  });
  slide.addText("Powerful AI Content Generation Platform", {
    x: 0.6, y: 3.0, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, align: "left"
  });
  slide.addText("Powered by MiniMax Matrix MCP", {
    x: 0.6, y: 4.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "737373", align: "left"
  });
  return slide;
}

function createSlide02(pres, theme) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });
  slide.addText("AGENDA", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Arial", bold: true,
    color: theme.accent
  });
  const items = [
    { num: "01", title: "Image Generation" },
    { num: "02", title: "Video Generation" },
    { num: "03", title: "Audio & Music" },
    { num: "04", title: "Document Processing" }
  ];
  items.forEach((item, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.2 + i * 1.0, w: 0.8, h: 0.8,
      fill: { color: theme.secondary },
      rectRadius: 0.05
    });
    slide.addText(item.num, {
      x: 0.5, y: 1.2 + i * 1.0, w: 0.8, h: 0.8,
      fontSize: 20, fontFace: "Arial", bold: true,
      color: theme.accent, align: "center", valign: "middle"
    });
    slide.addText(item.title, {
      x: 1.5, y: 1.2 + i * 1.0, w: 7, h: 0.8,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", valign: "middle"
    });
  });
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "737373", align: "center"
  });
  return slide;
}

function createSlide03(pres, theme) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("Image Generation", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Arial", bold: true,
    color: "FFFFFF"
  });
  const features = [
    { title: "Text-to-Image", desc: "Generate images from text descriptions" },
    { title: "Image-to-Image", desc: "Transform existing images with AI" },
    { title: "Style Transfer", desc: "Apply artistic styles to photos" }
  ];
  features.forEach((f, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 1.2 + i * 1.3, w: 4.2, h: 1.1,
      fill: { color: theme.light },
      rectRadius: 0.08
    });
    slide.addText(f.title, {
      x: 0.7, y: 1.3 + i * 1.3, w: 3.8, h: 0.5,
      fontSize: 18, fontFace: "Arial", bold: true,
      color: theme.accent
    });
    slide.addText(f.desc, {
      x: 0.7, y: 1.7 + i * 1.3, w: 3.8, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "CCCCCC"
    });
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.9,
    fill: { color: theme.secondary },
    rectRadius: 0.1
  });
  slide.addText("Example Prompts", {
    x: 5.4, y: 1.4, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: theme.accent
  });
  const prompts = [
    '"Futuristic city at sunset"',
    '"Cyberpunk portrait"',
    '"Abstract digital art"'
  ];
  prompts.forEach((p, i) => {
    slide.addText(p, {
      x: 5.4, y: 2.0 + i * 0.8, w: 3.9, h: 0.6,
      fontSize: 13, fontFace: "Arial", italic: true,
      color: "FFFFFF"
    });
  });
  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "737373", align: "center"
  });
  return slide;
}

function createSlide04(pres, theme) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("Video Generation", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Arial", bold: true,
    color: "FFFFFF"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 2.5,
    fill: { color: theme.light },
    rectRadius: 0.1
  });
  slide.addText("Text-to-Video", {
    x: 0.7, y: 1.4, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Arial", bold: true,
    color: theme.accent
  });
  slide.addText("Generate dynamic videos from text descriptions. Perfect for marketing, social media, and creative projects.", {
    x: 0.7, y: 1.9, w: 3.9, h: 1.5,
    fontSize: 14, fontFace: "Arial",
    color: "CCCCCC"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 2.5,
    fill: { color: theme.light },
    rectRadius: 0.1
  });
  slide.addText("Image-to-Video", {
    x: 5.4, y: 1.4, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Arial", bold: true,
    color: theme.accent
  });
  slide.addText("Animate static images into compelling video content. Bring photos to life with motion and transitions.", {
    x: 5.4, y: 1.9, w: 3.9, h: 1.5,
    fontSize: 14, fontFace: "Arial",
    color: "CCCCCC"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.2,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText('Example: "futuristic AI creative studio, holographic interface, digital art creation"', {
    x: 0.7, y: 4.3, w: 8.6, h: 0.6,
    fontSize: 14, fontFace: "Arial", italic: true,
    color: "FFFFFF"
  });
  slide.addText("4", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "737373", align: "center"
  });
  return slide;
}

function createSlide05(pres, theme) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("Audio & Music", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Arial", bold: true,
    color: "FFFFFF"
  });
  const cards = [
    { title: "Text-to-Speech", desc: "Natural voice synthesis with multiple languages and tones" },
    { title: "Text-to-Music", desc: "Generate background music in various styles and moods" },
    { title: "Audio Analysis", desc: "Transcribe and understand audio content" }
  ];
  cards.forEach((card, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5 + i * 3.1, y: 1.3, w: 2.9, h: 2.8,
      fill: { color: theme.light },
      rectRadius: 0.1
    });
    slide.addShape(pres.shapes.OVAL, {
      x: 1.5 + i * 3.1, y: 1.6, w: 1.0, h: 1.0,
      fill: { color: theme.secondary }
    });
    slide.addText(card.title, {
      x: 0.6 + i * 3.1, y: 2.8, w: 2.7, h: 0.6,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: theme.accent, align: "center"
    });
    slide.addText(card.desc, {
      x: 0.6 + i * 3.1, y: 3.4, w: 2.7, h: 0.6,
      fontSize: 12, fontFace: "Arial",
      color: "CCCCCC", align: "center"
    });
  });
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "737373", align: "center"
  });
  return slide;
}

function createSlide06(pres, theme) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("Document Processing", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Arial", bold: true,
    color: "FFFFFF"
  });
  const docs = [
    { name: "PDF", color: "e63946" },
    { name: "PPT", color: "e85d04" },
    { name: "Excel", color: "2a9d8f" },
    { name: "Word", color: "3a86ff" }
  ];
  docs.forEach((doc, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5 + i * 2.4, y: 1.2, w: 2.2, h: 1.5,
      fill: { color: doc.color },
      rectRadius: 0.1
    });
    slide.addText(doc.name, {
      x: 0.5 + i * 2.4, y: 1.2, w: 2.2, h: 1.5,
      fontSize: 24, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 9, h: 2.2,
    fill: { color: theme.light },
    rectRadius: 0.1
  });
  slide.addText("Capabilities", {
    x: 0.7, y: 3.2, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Arial", bold: true,
    color: theme.accent
  });
  const caps = [
    "Generate professional reports and presentations",
    "Create data visualizations and charts",
    "Process and analyze existing documents",
    "Convert between multiple formats"
  ];
  caps.forEach((c, i) => {
    slide.addText(c, {
      x: 0.9, y: 3.7 + i * 0.4, w: 8.2, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "CCCCCC"
    });
  });
  slide.addText("6", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "737373", align: "center"
  });
  return slide;
}

function createSlide07(pres, theme) {
  const slide = pres.addSlide();
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });
  slide.addText("Thank You", {
    x: 0, y: 1.5, w: 10, h: 1.2,
    fontSize: 72, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.3, y: 2.8, w: 1.4, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("AI Creative Studio", {
    x: 0, y: 3.2, w: 10, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, align: "center"
  });
  slide.addText("Powered by MiniMax Matrix MCP", {
    x: 0, y: 4.5, w: 10, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "737373", align: "center"
  });
  slide.addText("7", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "737373", align: "center"
  });
  return slide;
}

createSlide01(pres, theme);
createSlide02(pres, theme);
createSlide03(pres, theme);
createSlide04(pres, theme);
createSlide05(pres, theme);
createSlide06(pres, theme);
createSlide07(pres, theme);

pres.writeFile({ fileName: '/Users/bytedance/ai-creative-studio/generated/ai-creative-studio.pptx' })
  .then(() => console.log('PPT created successfully'))
  .catch(err => console.error('Error:', err));