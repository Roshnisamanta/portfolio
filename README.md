# portfolio
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Roshni Samanta - Full-Stack Software Engineer</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
  
  <style>
    :root{
      --bg-1: #0b0512;
      --purple-1: #2a0e47;
      --purple-2: #6025b9;
      --accent: #714bc9;
      --glass-border: rgba(255,255,255,0.06);
      --muted: #5d4785;
      --glass-blur: 10px;
      --max-w: 1200px;
    }

    *{box-sizing: border-box; margin:0; padding:0}
    html{scroll-behavior: smooth}
    body{
      font-family: "Poppins", system-ui, sans-serif;
      background: radial-gradient(1200px 600px at 10% 20%, rgba(106, 31, 217, 0.18), transparent),
                  radial-gradient(1000px 500px at 90% 85%, rgba(144, 100, 245, 0.12), transparent),
                  linear-gradient(180deg, var(--bg-1) 0%, #240b32 100%);
      color:#cdcccd;
      -webkit-font-smoothing:antialiased;
      padding:48px 20px;
      display:flex;
      justify-content:center;
      min-height:100vh;
    }

    .container{width:100%; max-width:var(--max-w)}

    /* NAVBAR */
    .navbar{display:flex; align-items:center; justify-content:space-between; margin-bottom:60px; animation: fadeDown 0.8s ease}
    .brand{display:flex; align-items:center; gap:12px}
    .logo{width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg,var(--purple-2),var(--accent)); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:24px; box-shadow: 0 8px 32px rgba(111,43,214,0.3)}
    .brand-text{font-weight:700; font-size:18px}
    .brand-subtitle{font-size:12px; color:var(--muted)}
    .nav-links{display:flex; gap:8px; align-items:center}
    .nav-links a{text-decoration:none; color:var(--muted); font-size:14px; font-weight:600; padding:10px 16px; border-radius:10px; transition: all 0.3s ease}
    .nav-links a:hover{background: rgba(255,255,255,0.06); color:#fff}

    /* HERO */
    .hero{display:grid; grid-template-columns: 1fr 440px; gap:40px; align-items:center; margin-bottom:80px; animation: fadeUp 0.8s ease}
    .eyebrow{color:var(--accent); font-weight:600; font-size:16px; margin-bottom:16px; display:inline-block}
    .title{font-size:64px; line-height:1.1; margin:0 0 24px 0; font-weight:800; letter-spacing:-2px; background: linear-gradient(135deg, #ffffff 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text}
    .subtitle{color:var(--muted); font-size:18px; line-height:1.7; margin-bottom:32px; max-width:95%}
    .btn-group{display:flex; gap:16px; flex-wrap:wrap}
    .btn{background: linear-gradient(90deg,var(--purple-2),var(--accent)); padding:14px 28px; border-radius:12px; color:white; border:0; font-weight:700; font-size:15px; cursor:pointer; box-shadow: 0 10px 30px rgba(111,43,214,0.3); transition: all 0.3s ease; text-decoration:none; display:inline-block}
    .btn:hover{transform: translateY(-2px); box-shadow: 0 16px 40px rgba(111,43,214,0.4)}
    .btn-secondary{background: rgba(255,255,255,0.06); border:1px solid var(--glass-border); padding:14px 28px; border-radius:12px; color:white; font-weight:600; font-size:15px; cursor:pointer; transition: all 0.3s ease; text-decoration:none; display:inline-block}
    .btn-secondary:hover{background: rgba(255,255,255,0.1); transform: translateY(-2px)}

    /* HERO CARD */
    .hero-card{background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); border:1px solid var(--glass-border); border-radius:24px; padding:32px; backdrop-filter: blur(var(--glass-blur)); -webkit-backdrop-filter: blur(var(--glass-blur)); box-shadow: 0 8px 40px rgba(88,0,210,0.2); position:relative; overflow:hidden}
    .avatar{width:120px; height:120px; border-radius:20px; background:linear-gradient(135deg,var(--purple-2),var(--accent)); display:flex; align-items:center; justify-content:center; font-size:64px; margin-bottom:24px; box-shadow: 0 16px 40px rgba(111,43,214,0.3); position:relative; overflow:hidden}
    .avatar img{width:100%; height:100%; object-fit:cover; border-radius:20px}
    .open-to-work{position:absolute; bottom:-8px; right:-8px; background:linear-gradient(135deg, #12976a, #059669); color:white; padding:6px 12px; border-radius:20px; font-size:11px; font-weight:700; box-shadow: 0 4px 12px rgba(16,185,129,0.4); border:3px solid var(--bg-1); animation: pulse 2s infinite; white-space:nowrap}
    @keyframes pulse{0%, 100%{box-shadow: 0 4px 12px rgba(16,185,129,0.4)}50%{box-shadow: 0 4px 20px rgba(16,185,129,0.7)}}
    .hero-card h3{font-size:22px; margin-bottom:12px}
    .hero-card p{color:var(--muted); font-size:15px; line-height:1.6; margin-bottom:20px}
    .tags{display:flex; gap:8px; flex-wrap:wrap}
    .tag{padding:8px 14px; border-radius:10px; background:rgba(139,92,246,0.15); border:1px solid rgba(139,92,246,0.3); font-size:13px; color:var(--accent); font-weight:600}

    /* SECTION */
    .section{margin-bottom:80px; animation: fadeUp 0.8s ease}
    .section-header{margin-bottom:32px}
    .section-title{font-size:36px; font-weight:700; margin-bottom:8px; color:#fff}
    .section-subtitle{color:var(--muted); font-size:16px; line-height:1.6}

    /* CARDS GRID */
    .cards-grid{display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:24px}
    .card{background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); border-radius:16px; padding:28px; border:1px solid var(--glass-border); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); transition: all 0.3s ease; cursor: pointer}
    .card:hover{transform: translateY(-8px); box-shadow: 0 24px 60px rgba(111,43,214,0.25); border-color: rgba(139,92,246,0.3)}
    .card-icon{width:52px; height:52px; background:linear-gradient(135deg,var(--purple-2),var(--accent)); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:24px; margin-bottom:20px; box-shadow: 0 8px 24px rgba(111,43,214,0.3)}
    .card-label{font-size:12px; color:var(--accent); font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px}
    .card h4{font-size:20px; margin-bottom:12px; color:#fff}
    .card p{color:var(--muted); font-size:14px; line-height:1.6}

    /* SKILLS */
    .skills-grid{display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:16px}
    .skill-item{background: rgba(255,255,255,0.02); border:1px solid var(--glass-border); border-radius:12px; padding:20px; text-align:center; transition: all 0.3s ease}
    .skill-item:hover{background: rgba(139,92,246,0.1); border-color: rgba(139,92,246,0.3); transform: translateY(-4px)}
    .skill-icon{font-size:32px; margin-bottom:12px}
    .skill-name{font-weight:600; font-size:14px}

    /* MODAL */
    .modal{display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); z-index: 9999; justify-content: center; align-items: center; backdrop-filter: blur(10px); animation: fadeIn 0.3s ease}
    .modal.active{display: flex}
    .modal-content{background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); border: 1px solid var(--glass-border); border-radius: 24px; padding: 40px; max-width: 900px; width: 90%; max-height: 85vh; overflow-y: auto; position: relative; box-shadow: 0 20px 80px rgba(111,43,214,0.4); animation: slideUp 0.4s ease}
    .modal-close{position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.1); border: 1px solid var(--glass-border); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 24px; transition: all 0.3s ease; border:none}
    .modal-close:hover{background: rgba(255,255,255,0.2); transform: rotate(90deg)}
    
    .resume-content h2{font-size: 32px; margin-bottom: 10px; background: linear-gradient(135deg, #ffffff 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text}
    .resume-content h3{font-size: 22px; color: var(--accent); margin: 30px 0 15px 0; border-bottom: 2px solid rgba(139,92,246,0.3); padding-bottom: 10px}
    .resume-content p{color: var(--muted); line-height: 1.8; margin-bottom: 15px}
    .resume-content ul{list-style: none; padding: 0; margin-bottom: 20px}
    .resume-content li{color: rgba(255,255,255,0.85); padding: 6px 0; padding-left: 24px; position: relative; line-height:1.6}
    .resume-content li:before{content: "▹"; position: absolute; left: 0; color: var(--accent); font-size: 18px}
    .resume-content strong{color: #fff}
    .contact-info{display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0; font-size: 14px}
    .contact-info a{color: var(--accent); text-decoration: none}
    .contact-info a:hover{text-decoration: underline}

    /* FOOTER */
    .footer{margin-top:80px; padding-top:40px; border-top:1px solid var(--glass-border); text-align:center}
    .footer-content{margin-bottom:24px}
    .footer h3{font-size:28px; margin-bottom:12px}
    .footer p{color:var(--muted); margin-bottom:24px; max-width:600px; margin-left:auto; margin-right:auto; line-height:1.7}
    .social-links{display:flex; justify-content:center; gap:16px; margin-bottom:32px}
    .social-link{width:48px; height:48px; background: rgba(255,255,255,0.04); border:1px solid var(--glass-border); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; transition: all 0.3s ease; text-decoration:none}
    .social-link:hover{background: rgba(139,92,246,0.2); border-color: var(--accent); transform: translateY(-4px)}
    .copyright{color:var(--muted); font-size:13px}

    /* ANIMATIONS */
    @keyframes fadeUp{from{opacity:0; transform: translateY(30px)} to{opacity:1; transform: translateY(0)}}
    @keyframes fadeDown{from{opacity:0; transform: translateY(-30px)} to{opacity:1; transform: translateY(0)}}
    @keyframes fadeIn{from{opacity: 0} to{opacity: 1}}
    @keyframes slideUp{from{opacity: 0; transform: translateY(50px)} to{opacity: 1; transform: translateY(0)}}

    /* RESPONSIVE */
    @media (max-width:980px){.hero{grid-template-columns: 1fr} .title{font-size:48px} .subtitle{max-width:100%}}
    @media (max-width:640px){
      .nav-links{display:none}
      .title{font-size:40px}
      .section-title{font-size:28px}
      body{padding:24px 16px}
      .navbar{margin-bottom:40px}
      .cards-grid{grid-template-columns: 1fr}
      .open-to-work{font-size:10px; padding:5px 10px}
      .modal-content{padding: 30px 20px; width: 95%}
      .contact-info{flex-direction: column; gap: 10px}
      .resume-content h2{font-size: 26px}
      .resume-content h3{font-size: 20px}
    }
  </style>
</head>
<body>
  <div class="container">

    <!-- NAVBAR -->
    <nav class="navbar">
      <div class="brand">
        <div class="logo">R</div>
        <div>
          <div class="brand-text">Roshni Samanta</div>
          <div class="brand-subtitle">Full-Stack Software & AI Engineer</div>
        </div>
      </div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#work">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-left">
        <div class="eyebrow">👋 Hello, I'm Roshni</div>
        <h1 class="title">Building Beautiful, Reliable Web Apps</h1>
        <p class="subtitle">I'm a full-stack and AI engineer focused on Java, JavaScript, HTML and CSS. I build usable interfaces and resilient backends — recently creating tools for community help, small businesses, and automation.</p>
        <div class="btn-group">
          <a class="btn" href="mailto:roshni.samanta.1985@gmail.com">Get In Touch</a>
          <a class="btn-secondary" href="#work">View My Projects</a>
        </div>
      </div>

      <div class="hero-card">
        <div class="avatar">
          <img src="WhatsApp Image 2025-12-02 at 4.17.41 PM.jpeg" alt="Roshni Samanta"> 
          <div class="open-to-work">🟢 Open to Work</div>
        </div>
        <h3>Full Stack Developer</h3>
        <p>Currently building community-focused web apps and portfolio sites. Comfortable with JavaScript, Spring Boot, Java, and designing accessible UI.</p>
        <div class="tags">
          <div class="tag">JavaScript</div>
          <div class="tag">Spring Boot</div>
          <div class="tag">Java</div>
          <div class="tag">CSS</div>
          <div class="tag">SQL</div>
          <div class="tag">HTML</div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section" id="about">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Passionate about building products that help people — with strong foundations in Java and web technologies</p>
      </div>
      <div class="cards-grid">
        <div class="card">
          <div class="card-icon">💻</div>
          <div class="card-label">Development</div>
          <h4>Production-ready Code</h4>
          <p>I write maintainable, well-tested code. I prefer clear APIs, solid error handling, and clean architecture so projects scale easily.</p>
        </div>
        <div class="card">
          <div class="card-icon">🎯</div>
          <div class="card-label">Impact</div>
          <h4>Community-first Projects</h4>
          <p>I focus on projects that solve real problems — from helping citizens report missing persons faster to small business websites that increase sales.</p>
        </div>
        <div class="card">
          <div class="card-icon">🚀</div>
          <div class="card-label">Learning</div>
          <h4>Always Improving</h4>
          <p>I'm actively learning modern JavaScript, front-end patterns, and DSA in Java. I love shipping projects and iterating based on user feedback.</p>
        </div>
      </div>
    </section>

    <!-- WORK -->
    <section class="section" id="work">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Recent work and product ideas that showcase my skills and impact</p>
      </div>

      <div class="cards-grid">
        <div class="card">
          <div class="card-icon">📝</div>
          <div class="card-label">Legal compass</div>
          <h4>Smart Legal Article & Complaint Finder</h4>
          <p>Legal Compass is a smart legal guidance tool that helps users quickly find the correct legal articles, sections, and document formats for filing complaints.</p>
        </div>

        <div class="card">
          <div class="card-icon">🏪</div>
          <div class="card-label">Small Business</div>
          <h4>Local Business Portfolio Builder</h4>
          <p>A no-code generator that creates a responsive website for local shops. Owners fill a form and the system auto-generates a live preview, downloadable site bundle, and a QR code for sharing.</p>
        </div>

        <div class="card">
          <div class="card-icon">📡</div>
          <div class="card-label">Prism</div>
          <h4>Emergency Connect — Rapid Alert System</h4>
          <p>Location-based alert platform to report missing or at-risk people instantly. Sends notifications to nearby volunteers, police, and shops; includes map view, status tracking, and an admin dashboard for case management.</p>
        </div>

        <div class="card">
          <div class="card-icon">💍</div>
          <div class="card-label">E-Commerce</div>
          <h4>Jewellery Shop Website</h4>
          <p>Personal e-commerce front for a local jewelry shop showcasing designs and contact/ordering flow — responsive and mobile-first.</p>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section" id="skills">
      <div class="section-header">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Technologies I use day-to-day</p>
      </div>
      <div class="skills-grid">
        <div class="skill-item"><div class="skill-icon">☕</div><div class="skill-name">Java / Spring Boot</div></div>
        <div class="skill-item"><div class="skill-icon">🎨</div><div class="skill-name">HTML & CSS</div></div>
        <div class="skill-item"><div class="skill-icon">⚡</div><div class="skill-name">JavaScript</div></div>
        <div class="skill-item"><div class="skill-icon">🐍</div><div class="skill-name">Python</div></div>
        <div class="skill-item"><div class="skill-icon">🗄️</div><div class="skill-name">SQL</div></div>
        <div class="skill-item"><div class="skill-icon">🐳</div><div class="skill-name">Docker</div></div>
      </div>
    </section>

    <!-- FOOTER / CONTACT -->
    <footer class="footer" id="contact">
      <div class="footer-content">
        <h3>Let's Work Together</h3>
        <p>I'm open to internship and full-time roles in full-stack and web development. Want to collaborate or see code? Send a message or check my resume.</p>
        <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:32px">
          <a class="btn" href="mailto:roshni.samanta.1985@gmail.com">Email Me</a>
          <button class="btn-secondary" onclick="openResumeModal()">View Resume</button>
        </div>
      </div>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/roshni-samanta" class="social-link" title="LinkedIn" target="_blank">💼</a>
        <a href="https://github.com/Roshnisamanta" class="social-link" title="GitHub" target="_blank">💻</a>
        <a href="mailto:roshni.samanta.1985@gmail.com" class="social-link" title="Email">📧</a>
      </div>
      <div class="copyright">© 2025 Roshni Samanta. Built with 💜 and lots of coffee.</div>
    </footer>

  </div>

  <!-- RESUME MODAL -->
  <div class="modal" id="resumeModal">
    <div class="modal-content">
      <button class="modal-close" onclick="closeResumeModal()">×</button>
      
      <div class="resume-content">
        <h2>ROSHNI SAMANTA</h2>
        <p style="color: var(--accent); font-size: 18px; margin-bottom: 20px; font-weight:600">B.Tech - Artificial Intelligence & Machine Learning</p>
        
        <div class="contact-info">
          <span>📧 <a href="mailto:2k23.psitaiml2311128@gmail.com">2k23.psitaiml2311128@gmail.com</a></span>
          <span>📱 <a href="tel:+917651827384">+91 7651827384</a></span>
          <span>🔗 <a href="https://github.com/Roshnisamanta" target="_blank">GitHub: Roshnisamanta</a></span>
          <span>💼 <a href="https://www.linkedin.com/in/roshni-samanta" target="_blank">LinkedIn: Roshni Samanta</a></span>
        </div>

        <div style="text-align: center; margin: 25px 0;">
          <a href="roshni s cv.docx" class="btn" download style="display: inline-block;">📥 Download CV</a>
        </div>

        <h3>Professional Summary</h3>
        <p>Motivated and detail-oriented B.Tech student specializing in Artificial Intelligence and Machine Learning. Skilled in Java, C, and full-stack development, with hands-on experience building real-world projects. Strong in problem-solving, teamwork, and applying technical concepts effectively. Eager to contribute to innovative work in AI and web development.</p>

        <h3>Education</h3>
        <p><strong>B.Tech - Artificial Intelligence & Machine Learning</strong></p>
        <p>Pranveer Singh Institute of Technology (PSIT), AKTU</p>
        <p>Percentage (Till 4th Semester): 73.36%</p>

        <p style="margin-top: 20px;"><strong>Class 12 - CBSE</strong></p>
        <p>Guru Nanak Public School</p>
        <p>Percentage: 74%</p>

        <p style="margin-top: 20px;"><strong>Class 10 - CBSE</strong></p>
        <p>Dr. P. R. Wasson Public School</p>
        <p>Percentage: 65%</p>

        <h3>Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong> HTML, CSS, C, Java (DSA in progress)</li>
          <li><strong>Core Skills:</strong> DSA, Problem-Solving (Actively practicing DSA and coding problems in Java to strengthen logic and core fundamentals)</li>
          <li><strong>Web Development:</strong> Responsive UI, Forms, Layouts</li>
          <li><strong>Tools:</strong> VS Code, Git, GitHub</li>
          <li><strong>Soft Skills:</strong> Communication, Teamwork, Quick Learning</li>
        </ul>

        <h3>Project</h3>
        <p><strong>Jewellery E-Commerce Platform</strong></p>
        <p>A complete online shopping website for jewellery with responsive UI, user authentication, secure checkout, and database-driven order management. Includes an admin panel for managing products, inventory, and orders.</p>
        <ul>
          <li>Built responsive UI for optimal user experience across devices</li>
          <li>Implemented user authentication and secure checkout process</li>
          <li>Designed database-driven order management system</li>
          <li>Created admin panel for product and inventory management</li>
        </ul>
        <p><strong>Tech Stack:</strong> HTML, CSS</p>

        <h3>Additional Projects</h3>
        
        <p><strong>Legal Compass - Smart Legal Article & Complaint Finder</strong></p>
        <ul>
          <li>Developed a legal guidance tool to help users find correct legal articles and document formats</li>
          <li>Implemented intelligent search algorithms for quick document retrieval</li>
          <li>Built responsive UI for easy navigation and document access</li>
        </ul>

        <p><strong>Emergency Connect - Rapid Alert System (Prism)</strong></p>
        <ul>
          <li>Created location-based alert platform for missing persons reports</li>
          <li>Integrated real-time notifications to volunteers, police, and local shops</li>
          <li>Developed admin dashboard for case management and status tracking</li>
        </ul>

        <p><strong>Local Business Portfolio Builder</strong></p>
        <ul>
          <li>Built no-code website generator for local businesses</li>
          <li>Auto-generates responsive websites with live preview functionality</li>
          <li>Integrated QR code generation for easy sharing</li>
        </ul>

        <h3>Hobbies</h3>
        <ul>
          <li>Dance</li>
          <li>Traveling</li>
        </ul>
      </div>
    </div>
  </div>

  <script>
    function openResumeModal() {
      document.getElementById('resumeModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeResumeModal() {
      document.getElementById('resumeModal').classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    document.getElementById('resumeModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeResumeModal();
      }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeResumeModal();
      }
    });
  </script>
</body>
</html>
