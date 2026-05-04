# AI Creative Studio

Multi-Skill AI Content Generation Platform - Showcasing 6+ Mavis Skills

<p align="center">
  <img src="assets/hero-image.png" alt="AI Creative Studio Hero" width="600">
</p>

## Overview

This project demonstrates the power of Mavis Skills - a multi-agent AI system that can generate various types of content using different specialized skills. The project includes AI-generated images, videos, audio, presentations, spreadsheets, and more.

## Skills Used

This project showcases **6 Mavis Skills**:

| Skill | Capability | Example Output |
|-------|------------|----------------|
| **matrix** | Image/Video/Audio Generation | `hero-image.png`, `demo-video.mp4`, `welcome.mp3` |
| **minimax-pptx** | PowerPoint Generation | `ai-creative-studio.pptx` (7 slides) |
| **minimax-pdf** | PDF Report Creation | `report.html` (PDF template) |
| **minimax-xlsx** | Excel Spreadsheet | `capabilities.xlsx` (3 sheets with formulas) |
| **minimax-docx** | Word Document Creation | Ready for `.docx` generation |
| **playwright** | Web Automation | Browser automation capabilities |

## Project Structure

```
ai-creative-studio/
├── index.html              # Main showcase webpage
├── assets/                 # Generated media assets
│   ├── hero-image.png     # AI-generated hero image (2.0 MB)
│   ├── welcome.mp3         # AI-generated audio (56 KB)
│   └── demo-video.mp4     # AI-generated video (10.0 MB)
├── generated/             # Generated documents
│   ├── ai-creative-studio.pptx  # PowerPoint presentation
│   ├── capabilities.xlsx  # Excel spreadsheet
│   └── report.html        # PDF report HTML template
├── slides/                # PPTX generation code
│   ├── compile.js         # Main compile script
│   └── output/            # PPTX output directory
└── README.md              # This file
```

## Generated Files

### Media Assets

| File | Skill Used | Size | Description |
|------|-----------|------|-------------|
| `hero-image.png` | `matrix_generate_image` | 2.0 MB | AI-generated futuristic hero image |
| `demo-video.mp4` | `matrix_gen_videos` | 10.0 MB | AI-generated video clip |
| `welcome.mp3` | `matrix_synthesize_speech` | 56 KB | AI-generated welcome message |

### Documents

| File | Skill Used | Size | Description |
|------|-----------|------|-------------|
| `ai-creative-studio.pptx` | `minimax-pptx` | 126 KB | 7-slide PowerPoint presentation |
| `capabilities.xlsx` | `minimax-xlsx` | 8 KB | 3-sheet spreadsheet with formulas |
| `report.html` | `minimax-pdf` | 4 KB | HTML template for PDF generation |

## How It Works

### 1. Image Generation (Matrix MCP)

```bash
mavis mcp call matrix matrix_generate_image '{"prompt": "futuristic AI creative studio, holographic interface, cyberpunk"}'
```

### 2. Video Generation (Matrix MCP)

```bash
mavis mcp call matrix matrix_gen_videos '{"prompt": "futuristic AI creative studio, holographic interface"}'
```

### 3. Audio Generation (Matrix MCP)

```bash
mavis mcp call matrix matrix_synthesize_speech '{"text": "Welcome to AI Creative Studio", "voice": "zh-CN"}'
```

### 4. PPTX Generation (minimax-pptx)

```javascript
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
// Add slides with themes, shapes, and text
pres.writeFile({ fileName: 'output.pptx' });
```

### 5. Excel Generation (minimax-xlsx)

```python
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill

book = Workbook()
sheet = book.active
sheet['A1'] = 'Skill'
sheet['B1'] = 'Status'
# Add formulas for computed values
sheet['C1'] = '=SUM(A2:A10)'
book.save('output.xlsx')
```

## Key Features

### Multi-Modal Content Generation
- **Images**: Text-to-Image, Image-to-Image, style transfer
- **Videos**: Text-to-Video, Image-to-Video animation
- **Audio**: Text-to-Speech (multiple languages), Text-to-Music

### Document Processing
- **PowerPoint**: Professional 16:9 presentations with themes
- **Excel**: Spreadsheets with live formulas and styling
- **PDF**: Professional report templates with charts

### Web Automation
- Browser automation using Playwright
- Screenshot capture
- Form filling and data extraction

## Technical Stack

| Technology | Purpose |
|------------|---------|
| **PptxGenJS** | PowerPoint generation |
| **Openpyxl** | Excel spreadsheet creation |
| **Playwright** | Web browser automation |
| **MiniMax Matrix API** | AI content generation (image/video/audio) |
| **Mavis Skills** | Skill orchestration framework |

## Viewing the Results

Open `index.html` in a web browser to see:
- AI-generated hero image
- Video player for demo video
- Audio player for welcome message
- Feature cards describing capabilities
- Skills showcase grid
- Generated files list

## Requirements

- Node.js 18+ (for PptxGenJS)
- Python 3.9+ (for Openpyxl)
- Mavis CLI with Matrix MCP configured
- LibreOffice (for Excel recalculation)

## Installation

```bash
# Install Node.js dependencies for PPTX
cd slides && npm install pptxgenjs

# Install Python dependencies for Excel
pip install openpyxl
```

## Usage Examples

### Generate New Images

```bash
mavis mcp call matrix matrix_generate_image '{"prompt": "your prompt here"}'
```

### Generate Videos

```bash
mavis mcp call matrix matrix_gen_videos '{"prompt": "your prompt here"}'
```

### Create Custom PPTX

1. Edit slide files in `slides/` directory
2. Run compile: `node slides/compile.js`
3. Output: `slides/output/your-deck.pptx`

### Create Custom Excel

```python
python3 << 'EOF'
from openpyxl import Workbook
book = Workbook()
# Add your data and formulas
book.save('output.xlsx')
EOF
```

## License

MIT License - Feel free to use and modify for your projects.

## Acknowledgments

Built with [Mavis](https://github.com/minimax/mavis) - The AI Agent Framework by MiniMax

---

<p align="center">
  <strong>AI Creative Studio</strong> - Showcasing the power of multi-skill AI content generation
</p>