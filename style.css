/* Global */
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:"Poppins", sans-serif; background:#ffffff; color:#0a192f; font-weight:700; min-height:100vh; display:flex; flex-direction:column; }

/* Header */
header { background:#0a192f; color:white; padding:20px 50px; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; z-index:1000; }
.title {
  font-size:3rem; 
  font-weight:900; 
  background: linear-gradient(90deg, #0a192f 0%, #ffffff 50%, #4169E1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 2s infinite alternate;
}
@keyframes titleGlow {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Navbar */
nav { display:flex; gap:15px; }
.nav-box {
  background:#0a192f;
  color:white;
  padding:10px 20px;
  border-radius:10px;
  font-weight:700;
  cursor:pointer;
  text-align:center;
  transition: all 0.3s ease;
}
.nav-box:hover { 
  background:white;
  color:#0a192f;
  transform:translateY(-5px);
  box-shadow:0 4px 15px rgba(0,0,0,0.3);
}

/* Sections */
.section.box {
  background:white;
  border-radius:15px;
  padding:60px 30px;
  margin:40px auto;
  max-width:900px;
  box-shadow:0 8px 30px rgba(0,0,0,0.1);
  display:none;
  opacity:0;
  transform: scale(0.8);
  transition: all 0.6s ease;
  font-weight:700;
}
.section.box.active {
  display:block;
  opacity:1;
  transform: scale(1);
  animation: blinkZoom 0.8s ease forwards;
}

/* Blink + Zoom Animation */
@keyframes blinkZoom {
  0% { opacity:0; transform: scale(0.7); }
  50% { opacity:1; transform: scale(1.1); }
  100% { opacity:1; transform: scale(1); }
}

/* Section Heading */
.section h2 { font-size:2rem; margin-bottom:20px; color:#0a192f; font-weight:700; }
.section p { font-size:1.1rem; line-height:1.6; }

/* Projects Cards */
.projects-container { display:flex; flex-wrap:wrap; gap:20px; justify-content:center; }
.project-card {
  background:#0a192f;
  color:white;
  padding:20px;
  border-radius:15px;
  min-width:200px;
  text-align:center;
  font-weight:700;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform:translateY(-10px) scale(1.05);
  box-shadow:0 12px 30px rgba(0,0,0,0.2);
}

/* Footer */
footer { background:#0a192f; color:white; text-align:center; padding:20px; margin-top:auto; }