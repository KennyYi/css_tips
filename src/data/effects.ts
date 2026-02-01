export type Category = 'easy' | 'normal' | 'hard' | 'animation';

export interface Effect {
  id: string;
  title: string;
  description: string;
  category: Category;
  initialCode: string;
  htmlSnippet: string;
}

export const effects: Effect[] = [
  // EASY
  {
    id: 'simple-border',
    title: 'Custom Border',
    description: 'Simple border radius and styling.',
    category: 'easy',
    initialCode: `.preview-box {
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  border: 4px dashed #ff6b6b;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight: bold;
}

.preview-container {
  background: #fff;
}`,
    htmlSnippet: `<div class="preview-box">Border Box</div>`
  },
  {
    id: 'shadow-box',
    title: 'Box Shadow',
    description: 'Basic drop shadow for depth.',
    category: 'easy',
    initialCode: `.preview-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #333;
}

.preview-container {
  background: #eee;
}`,
    htmlSnippet: `<div class="preview-box">I have a shadow</div>`
  },

  // NORMAL
  {
    id: 'absolute-centering',
    title: 'Absolute Centering',
    description: 'Center an element perfectly using Flexbox.',
    category: 'easy',
    initialCode: `.preview-box {
  background: #ff4757;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  font-weight: bold;
}

/* The container does the centering work here */
.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe4ea;
  width: 100%;
  height: 100%;
}`,
    htmlSnippet: `<div class="preview-box">I am Centered!</div>`
  },
  {
    id: 'circular-image',
    title: 'Circular Image',
    description: 'Make any image a perfect circle.',
    category: 'easy',
    initialCode: `.preview-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.preview-container {
  background: #2f3542;
}`,
    htmlSnippet: `<img class="preview-image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="User Profile" />`
  },
  {
    id: 'text-truncation',
    title: 'Text Truncation',
    description: 'Truncate text with an ellipsis (...)',
    category: 'easy',
    initialCode: `.preview-box {
  width: 200px;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  color: #333;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.preview-container {
  background: #f1f2f6;
}`,
    htmlSnippet: `<div class="preview-box">
  <div class="truncate">
    This is a very long text that needs to be cut off because it is too long.
  </div>
</div>`
  },

  // NORMAL
  {
    id: 'hover-card',
    title: 'Hover Card',
    description: 'Scale and shadow change on hover.',
    category: 'normal',
    initialCode: `.preview-box {
  width: 250px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #333;
}

.preview-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.preview-container {
  background: #f3f4f6;
}`,
    htmlSnippet: `<div class="preview-box">
  <h3>Hover me!</h3>
  <p>I move up and get a deeper shadow.</p>
</div>`
  },
  {
    id: 'gradient-text',
    title: 'Gradient Text',
    description: 'Text with a gradient fill.',
    category: 'normal',
    initialCode: `.preview-text {
  font-size: 60px;
  font-weight: 900;
  background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.preview-container {
  background: #fff;
}`,
    htmlSnippet: `<h1 class="preview-text">Gradient Text</h1>`
  },

  {
    id: 'floating-label-input',
    title: 'Input Focus Animation',
    description: 'Floating label animation on focus.',
    category: 'normal',
    initialCode: `.input-group {
  position: relative;
  margin: 20px 0;
}

.input-field {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 2px solid #999;
  outline: none;
  background: transparent;
  transition: 0.2s;
}

.input-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: 0.2s;
}

.input-field:focus ~ .input-label,
.input-field:valid ~ .input-label {
  top: -20px;
  font-size: 12px;
  color: #03e9f4;
}

.input-field:focus {
  border-bottom: 2px solid #03e9f4;
}

.preview-container {
  background: #222;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}`,
    htmlSnippet: `<div class="input-group">
  <input type="text" class="input-field" required>
  <label class="input-label">Username</label>
</div>`
  },
  {
    id: 'custom-toggle',
    title: 'Custom Toggle',
    description: 'Pure CSS toggle switch.',
    category: 'normal',
    initialCode: `.toggle-checkbox {
  display: none;
}

.toggle-label {
  width: 60px;
  height: 30px;
  background: #ccc;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.toggle-label::after {
  content: '';
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.toggle-checkbox:checked + .toggle-label {
  background: #4cd137;
}

.toggle-checkbox:checked + .toggle-label::after {
  left: 32px;
}

.preview-container {
  background: #f5f6fa;
}`,
    htmlSnippet: `<div class="toggle-wrapper">
  <input type="checkbox" id="toggle" class="toggle-checkbox">
  <label for="toggle" class="toggle-label"></label>
</div>`
  },
  {
    id: 'custom-scrollbar',
    title: 'Custom Scrollbar',
    description: 'Styling the browser scrollbar (Webkit).',
    category: 'normal',
    initialCode: `/* The scroll content container */
.scroll-content {
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  background: #fff;
  padding: 1rem;
  color: #333;
  border-radius: 8px;
}

/* Scrollbar width */
.scroll-content::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.scroll-content::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 8px;
}
 
/* Handle */
.scroll-content::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 8px;
}

/* Handle on hover */
.scroll-content::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

.preview-container {
  background: #333;
}`,
    htmlSnippet: `<div class="scroll-content">
  <h3>Scroll Me!</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>More content to make it scroll...</p>
</div>`
  },

  // HARD
  {
    id: 'glassmorphism',
    title: 'Glassmorphism',
    description: 'Modern frosted glass effect.',
    category: 'hard',
    initialCode: `.preview-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  padding: 3rem;
  color: white;
  width: 350px;
}

.preview-container {
  background: linear-gradient(45deg, #FC466B, #3F5EFB);
  background-size: cover;
}`,
    htmlSnippet: `<div class="preview-box">
  <h2>Glass Card</h2>
  <p>Notice the blur behind me?</p>
</div>`
  },
  {
    id: 'neon-glow',
    title: 'Neon Glow',
    description: 'Complex layered shadows for neon look.',
    category: 'hard',
    initialCode: `.preview-box {
  color: #fff;
  border: 4px solid #fff;
  padding: 20px 40px;
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 10px;
  box-shadow: 
    0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem #bc13fe,
    0 0 0.8rem #bc13fe,
    0 0 2.8rem #bc13fe,
    inset 0 0 1.3rem #bc13fe;
  text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #bc13fe,
    0 0 80px #bc13fe,
    0 0 90px #bc13fe,
    0 0 100px #bc13fe,
    0 0 150px #bc13fe;
}

.preview-container {
  background: #050505;
}`,
    htmlSnippet: `<div class="preview-box">Neon</div>`
  },

  {
    id: '3d-card-flip',
    title: '3D Card Flip',
    description: 'Hover to flip the card and reveal the back.',
    category: 'hard',
    initialCode: `.flip-card {
  background-color: transparent;
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.preview-container {
  background: #f1f1f1;
}`,
    htmlSnippet: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Front</h2>
    </div>
    <div class="flip-card-back">
      <h2>Back</h2>
      <p>Content goes here</p>
    </div>
  </div>
</div>`
  },
  {
    id: 'glitch-effect',
    title: 'Glitch Text',
    description: 'Cyberpunk glitch animation using clip-path.',
    category: 'hard',
    initialCode: `.glitch {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}

.preview-container {
  background: #111;
  color: white;
}`,
    htmlSnippet: `<h1 class="glitch">
  <span aria-hidden="true">Glitch</span>
  Glitch
  <span aria-hidden="true">Glitch</span>
</h1>`
  },

  // ANIMATION
  {
    id: 'loading-spinner',
    title: 'Loading Spinner',
    description: 'Classic rotating spinner.',
    category: 'animation',
    initialCode: `.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.preview-container {
  background: #333;
}`,
    htmlSnippet: `<div class="spinner"></div>`
  },
  {
    id: 'bouncing-ball',
    title: 'Bouncing Ball',
    description: 'Keyframe animation simulating physics.',
    category: 'animation',
    initialCode: `.ball {
  width: 50px;
  height: 50px;
  background: #ff5252;
  border-radius: 50%;
  position: relative;
  animation: bounce 0.6s cubic-bezier(0.6, 0.05, 0.4, 1.45) infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-150px); }
}

.preview-container {
  background: #222;
  display: flex !important;
  align-items: flex-end !important;
  padding-bottom: 50px;
}`,
    htmlSnippet: `<div class="ball"></div>`
  },
  {
    id: 'typing-effect',
    title: 'Typing Effect',
    description: 'Typewriter text reveal animation.',
    category: 'animation',
    initialCode: `.typing {
  width: 22ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  color: lime;
}

@keyframes typing {
  from { width: 0 }
}

@keyframes blink {
  50% { border-color: transparent }
}

.preview-container {
  background: #000;
}`,
    htmlSnippet: `<div class="typing">Typing effect demo...</div>`
  },
  {
    id: 'pulse-animation',
    title: 'Pulse (Heartbeat)',
    description: 'Attention-grabbing pulse animation.',
    category: 'animation',
    initialCode: `.pulse {
  width: 100px;
  height: 100px;
  background: #e74c3c;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.preview-container {
  background: #ecf0f1;
}`,
    htmlSnippet: `<div class="pulse"></div>`
  },
  {
    id: 'shimmer-loading',
    title: 'Shimmer Loading',
    description: 'Skeleton screen shimmer effect.',
    category: 'animation',
    initialCode: `.skeleton {
  width: 300px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
}

.skeleton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  height: 100%;
  width: 150%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -150%;
  }
  100% {
    left: 150%;
  }
}

.preview-container {
  background: #f5f5f5;
}`,
    htmlSnippet: `<div>
  <div class="skeleton"></div>
  <div class="skeleton"></div>
  <div class="skeleton"></div>
</div>`
  },
  {
    id: 'shake-animation',
    title: 'Shake Animation',
    description: 'Error or attention shake effect.',
    category: 'animation',
    initialCode: `.shake-box {
  background: #e74c3c;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
  font-weight: bold;
}

.shake-box:hover {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

.preview-container {
  background: #2c3e50;
}`,
    htmlSnippet: `<div class="shake-box">Hover to Shake!</div>`
  },
  {
    id: 'fade-in-animation',
    title: 'Fade In Entry',
    description: 'Smooth fade in and up animation.',
    category: 'animation',
    initialCode: `.fade-in {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  color: #333;
}

.preview-container {
  background: #34495e;
}`,
    htmlSnippet: `<div class="fade-in fade-box">
  <h3>Fade In Content</h3>
  <p>I smoothly appear from below!</p>
</div>`
  }
];
