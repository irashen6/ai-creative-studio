# AI Creative Studio | AI 创意工坊

<p align="center">
  <img src="assets/hero-image.png" alt="AI Creative Studio" width="800">
</p>

<p align="center">
  <strong>English</strong> | <a href="#中文介绍">中文介绍</a>
</p>

---

## English Version

### Overview

**AI Creative Studio** is a multi-skill AI content generation platform built on MiniMax Mavis Skills framework. This project demonstrates the power of combining multiple specialized AI skills to create diverse content types - from images and videos to presentations and spreadsheets.

### Skills Demonstrated

This project showcases **6 core Mavis Skills**:

| Skill | Capability | Example Output |
|-------|------------|----------------|
| **matrix** | Image/Video/Audio Generation | `hero-image.png`, `demo-video.mp4`, `welcome.mp3` |
| **minimax-pptx** | PowerPoint Generation | `ai-creative-studio.pptx` (7 slides) |
| **minimax-pdf** | PDF Report Creation | `report.html` (HTML template for PDF) |
| **minimax-xlsx** | Excel Spreadsheet | `capabilities.xlsx` (3 sheets with formulas) |
| **minimax-docx** | Word Document Creation | Word document generation ready |
| **playwright** | Web Automation | Browser automation & testing |

### Project Structure

```
ai-creative-studio/
├── index.html              # Main showcase webpage
├── README.md               # Bilingual documentation
├── .gitignore              # Git ignore rules
├── assets/                 # AI-generated media assets
│   ├── hero-image.png     # AI-generated hero image (2.0 MB)
│   ├── demo-video.mp4     # AI-generated video (10.0 MB)
│   └── welcome.mp3         # AI-generated audio (56 KB)
├── generated/              # Generated documents
│   ├── ai-creative-studio.pptx    # PowerPoint presentation (126 KB)
│   ├── capabilities.xlsx   # Excel spreadsheet (8 KB)
│   └── report.html        # PDF report HTML template
├── slides/                 # PPTX generation code
│   ├── compile.js          # Main compile script
│   ├── package.json        # Node.js dependencies
│   └── output/             # PPTX output directory
└── scripts/                # Utility scripts
```

### Generated Files

#### Media Assets

| File | Skill Used | Size | Description |
|------|-----------|------|-------------|
| `hero-image.png` | `matrix_generate_image` | 2.0 MB | AI-generated futuristic hero image |
| `demo-video.mp4` | `matrix_gen_videos` | 10.0 MB | AI-generated video clip |
| `welcome.mp3` | `matrix_synthesize_speech` | 56 KB | AI-generated welcome message |

#### Documents

| File | Skill Used | Size | Description |
|------|-----------|------|-------------|
| `ai-creative-studio.pptx` | `minimax-pptx` | 126 KB | 7-slide PowerPoint presentation |
| `capabilities.xlsx` | `minimax-xlsx` | 8 KB | 3-sheet spreadsheet with formulas |
| `report.html` | `minimax-pdf` | 4 KB | HTML template for PDF generation |

### Quick Start

#### Prerequisites

- Node.js 18+ (for PptxGenJS)
- Python 3.9+ (for Openpyxl)
- Mavis CLI with Matrix MCP configured
- LibreOffice (optional, for Excel recalculation)

#### Installation

```bash
# Clone the repository
git clone https://github.com/irashen6/ai-creative-studio.git
cd ai-creative-studio

# Install Node.js dependencies for PPTX
cd slides && npm install

# Install Python dependencies for Excel
pip install openpyxl
```

#### Generate New Content

**Image Generation:**
```bash
mavis mcp call matrix matrix_generate_image '{"prompt": "your prompt here"}'
```

**Video Generation:**
```bash
mavis mcp call matrix matrix_gen_videos '{"prompt": "your prompt here"}'
```

**Audio Synthesis:**
```bash
mavis mcp call matrix matrix_synthesize_speech '{"text": "Hello world", "voice": "en-US"}'
```

### Technical Stack

| Technology | Purpose |
|------------|---------|
| **PptxGenJS** | PowerPoint presentation generation |
| **Openpyxl** | Excel spreadsheet creation with formulas |
| **Playwright** | Web browser automation |
| **MiniMax Matrix API** | AI content generation (image/video/audio) |
| **Mavis Skills** | Skill orchestration and agent framework |

### How It Works

The project demonstrates a practical workflow:

1. **Image Generation** - Use `matrix_generate_image` to create stunning visuals from text prompts
2. **Video Generation** - Use `matrix_gen_videos` to create dynamic video content
3. **Audio Generation** - Use `matrix_synthesize_speech` for natural voice synthesis
4. **Document Creation** - Use `minimax-pptx` and `minimax-xlsx` to create professional documents
5. **Showcase** - Present all generated content in an interactive webpage

### Key Features

- **Multi-Modal AI**: Generate images, videos, and audio from text
- **Professional Documents**: Create PowerPoint and Excel with proper formatting
- **Code-Based Generation**: All content is programmatically generated
- **Fully Documented**: Bilingual README with examples
- **Ready to Extend**: Modular structure for adding new skills

### Viewing the Results

Open `index.html` in a web browser to see:
- AI-generated hero image
- Video player for demo video
- Audio player for welcome message
- Feature cards describing capabilities
- Skills showcase grid
- Generated files list with download links

### Contributing

Contributions are welcome! Feel free to:
- Add new skill demonstrations
- Improve existing examples
- Fix bugs or enhance documentation
- Share your creative outputs

### License

MIT License - Feel free to use and modify for your projects.

### Acknowledgments

Built with [Mavis](https://github.com/minimax/mavis) - The AI Agent Framework by MiniMax

---

<a id="中文介绍"></a>

## 中文介绍

### 项目概述

**AI 创意工坊** (AI Creative Studio) 是一个基于 MiniMax Mavis Skills 框架构建的多技能 AI 内容生成平台。本项目展示了如何组合使用多种专业化 AI 技能来创建多样化内容类型——从图像和视频到演示文稿和电子表格。

### 展示的技能

本项目展示了 **6 个核心 Mavis 技能**：

| 技能 | 功能 | 示例输出 |
|------|------|---------|
| **matrix** | 图像/视频/音频生成 | `hero-image.png`, `demo-video.mp4`, `welcome.mp3` |
| **minimax-pptx** | PowerPoint 生成 | `ai-creative-studio.pptx` (7页幻灯片) |
| **minimax-pdf** | PDF 报告创建 | `report.html` (HTML 模板) |
| **minimax-xlsx** | Excel 电子表格 | `capabilities.xlsx` (3个工作表，含公式) |
| **minimax-docx** | Word 文档创建 | Word 文档生成就绪 |
| **playwright** | 网页自动化 | 浏览器自动化与测试 |

### 项目结构

```
ai-creative-studio/
├── index.html              # 主展示网页
├── README.md               # 双语文档
├── .gitignore              # Git 忽略规则
├── assets/                 # AI 生成的媒体资产
│   ├── hero-image.png     # AI 生成的主图 (2.0 MB)
│   ├── demo-video.mp4     # AI 生成的视频 (10.0 MB)
│   └── welcome.mp3         # AI 生成的音频 (56 KB)
├── generated/              # 生成的文档
│   ├── ai-creative-studio.pptx    # PowerPoint 演示文稿 (126 KB)
│   ├── capabilities.xlsx   # Excel 电子表格 (8 KB)
│   └── report.html        # PDF 报告 HTML 模板
├── slides/                 # PPTX 生成代码
│   ├── compile.js          # 主编译脚本
│   ├── package.json        # Node.js 依赖
│   └── output/             # PPTX 输出目录
└── scripts/                # 工具脚本
```

### 生成的文件

#### 媒体资产

| 文件 | 使用的技能 | 大小 | 描述 |
|------|-----------|------|------|
| `hero-image.png` | `matrix_generate_image` | 2.0 MB | AI 生成的未来风格主图 |
| `demo-video.mp4` | `matrix_gen_videos` | 10.0 MB | AI 生成的视频片段 |
| `welcome.mp3` | `matrix_synthesize_speech` | 56 KB | AI 生成的欢迎语音 |

#### 文档

| 文件 | 使用的技能 | 大小 | 描述 |
|------|-----------|------|------|
| `ai-creative-studio.pptx` | `minimax-pptx` | 126 KB | 7页 PowerPoint 演示文稿 |
| `capabilities.xlsx` | `minimax-xlsx` | 8 KB | 3个工作表，含公式 |
| `report.html` | `minimax-pdf` | 4 KB | PDF 生成的 HTML 模板 |

### 快速开始

#### 环境要求

- Node.js 18+ (用于 PptxGenJS)
- Python 3.9+ (用于 Openpyxl)
- 已配置 Matrix MCP 的 Mavis CLI
- LibreOffice (可选，用于 Excel 公式重算)

#### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/irashen6/ai-creative-studio.git
cd ai-creative-studio

# 安装 Node.js 依赖
cd slides && npm install

# 安装 Python 依赖
pip install openpyxl
```

#### 生成新内容

**图像生成：**
```bash
mavis mcp call matrix matrix_generate_image '{"prompt": "你的提示词"}'
```

**视频生成：**
```bash
mavis mcp call matrix matrix_gen_videos '{"prompt": "你的提示词"}'
```

**语音合成：**
```bash
mavis mcp call matrix matrix_synthesize_speech '{"text": "你好世界", "voice": "zh-CN"}'
```

### 技术栈

| 技术 | 用途 |
|------|------|
| **PptxGenJS** | PowerPoint 演示文稿生成 |
| **Openpyxl** | Excel 电子表格创建（含公式） |
| **Playwright** | 网页浏览器自动化 |
| **MiniMax Matrix API** | AI 内容生成（图像/视频/音频） |
| **Mavis Skills** | 技能编排和代理框架 |

### 工作原理

项目展示了一个实用的工作流程：

1. **图像生成** - 使用 `matrix_generate_image` 从文本提示创建精美图像
2. **视频生成** - 使用 `matrix_gen_videos` 创建动态视频内容
3. **音频生成** - 使用 `matrix_synthesize_speech` 进行自然语音合成
4. **文档创建** - 使用 `minimax-pptx` 和 `minimax-xlsx` 创建专业文档
5. **展示** - 在交互式网页中展示所有生成的内容

### 核心特性

- **多模态 AI**：从文本生成图像、视频和音频
- **专业文档**：创建具有正确格式的 PowerPoint 和 Excel
- **代码驱动生成**：所有内容均可编程生成
- **完整文档**：双语 README，含示例
- **易于扩展**：模块化结构，可添加新技能

### 查看结果

在浏览器中打开 `index.html` 可以看到：
- AI 生成的主图
- 演示视频播放器
- 欢迎语音播放器
- 功能介绍卡片
- 技能展示网格
- 生成文件列表及下载链接

### 参与贡献

欢迎贡献！您可以：
- 添加新的技能演示
- 改进现有示例
- 修复问题或增强文档
- 分享您的创意成果

### 许可证

MIT 许可证 - 欢迎自由使用和修改。

### 致谢

基于 MiniMax 的 AI 代理框架 [Mavis](https://github.com/minimax/mavis) 构建

---

<p align="center">
  <strong>AI Creative Studio | AI 创意工坊</strong><br>
  展示多技能 AI 内容生成的强大能力
</p>