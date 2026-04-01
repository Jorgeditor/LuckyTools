const fs = require('fs');
const file = 'c:/Users/jorge/AppData/Roaming/Adobe/CEP/extensions/com.jorgeditor.luckytools/GITHUBPAGE/LuckyTools-main/index.html';
let html = fs.readFileSync(file, 'utf8');

const newMain =     <main>
        <!-- HERO SECTION -->
        <section class="hero container">
            <div class="hero-content-wrapper">
                <div class="hero-card">
                    <div class="coming-soon">Launch Promo</div>
                    <div class="hero-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h1>Tools for <span>Creative Editors</span></h1>
                    <p>LuckyTools is a premium suite of plugins for Adobe Premiere Pro designed to automate tedious tasks, streamline your workflow, and let you focus on what really matters: your creativity. Everything is a shortcut away ⚡</p>
                    <div class="price-box">
                        <span class="price-strikethrough">129.99</span>
                        <span class="price-current">69.99</span>
                    </div>
                    <a href="#" class="btn-download">
                        <i class="fas fa-shopping-cart"></i> Get LuckyTools Now
                    </a>
                </div>
            </div>
        </section>

        <!-- COMMANDS AND FEATURES GRID -->
        <div class="container">
            <div class="section-divider">
                <h2>The Power of LuckyTools</h2>
                <div class="line"></div>
            </div>

            <div class="features-grid">
                <div class="feature-card">
                    <h4>Editing & Effects</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> Video & Audio Effects</li>
                        <li><i class="fas fa-check"></i> Video & Audio Transitions</li>
                        <li><i class="fas fa-check"></i> Video & Audio Presets</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4>Timeline & Clips</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> Move Clip to Playhead</li>
                        <li><i class="fas fa-check"></i> Select All Disabled Clips</li>
                        <li><i class="fas fa-check"></i> Unnest & Paste</li>
                        <li><i class="fas fa-check"></i> Adjustment Layer & Solid</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4>Markers & Tracks</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> Add Markers (Clip, Sequence, IN/OUT)</li>
                        <li><i class="fas fa-check"></i> Solo Lock Track</li>
                        <li><i class="fas fa-check"></i> Solo Mute Track</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4>Animation & Keyframes</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> Loop Keyframes (Ping-Pong, Cycle)</li>
                        <li><i class="fas fa-check"></i> Loop Footage</li>
                        <li><i class="fas fa-check"></i> Transfer Keyframes</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4>Smart Saving</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> Smart Save Project (Auto-versioning)</li>
                        <li><i class="fas fa-check"></i> Smart Save Sequence</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4>Advanced Utilities</h4>
                    <ul>
                        <li><i class="fas fa-check"></i> Ladder & Transform Tools</li>
                        <li><i class="fas fa-check"></i> Total System Integration</li>
                    </ul>
                </div>
            </div>

            <div class="section-divider">
                <h2>Included Panels</h2>
                <div class="line"></div>
            </div>

            <!-- LuckySearch -->
            <div class="feature-row">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckysearch.png" alt="LuckySearch" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Workflow • Speed</span>
                    </div>
                    <h3>LuckySearch: <br>Your Central Hub</h3>
                    <p>Access everything from one place. Find tools, effects, presets, and more instantly with an invisible and smart search bar. It's fully connected to all your shortcuts.</p>
                </div>
            </div>

            <!-- LuckyCommands -->
            <div class="feature-row reverse">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckycommands.png" alt="LuckyCommands" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Control • Power</span>
                    </div>
                    <h3>LuckyCommands: <br>Turbo Shortcuts</h3>
                    <p>Assign every action inside LuckyTools to your keyboard. Move faster with zero latency when applying presets, transitions, or effects directly to your clips.</p>
                </div>
            </div>

            <!-- LuckyOrganize -->
            <div class="feature-row">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckyorganize.png" alt="LuckyOrganize" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Assets • Management</span>
                    </div>
                    <h3>LuckyOrganize: <br>Structure Folders</h3>
                    <p>Keep your project bins perfectly organized. Instantly generate folder structures or auto-sort your media and sequences based on predefined logical patterns.</p>
                </div>
            </div>

            <!-- LuckyCut -->
            <div class="feature-row reverse">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckycut.png" alt="LuckyCut" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Editing • Speed</span>
                    </div>
                    <h3>LuckyCut: <br>Rapid Splicing</h3>
                    <p>Speed up the most fundamental part of editing. Slice, ripple, and manage gaps faster than ever, reducing the friction in your initial rough cut.</p>
                </div>
            </div>

            <!-- LuckyPod -->
            <div class="feature-row">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckypod.png" alt="LuckyPod" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Audio • Processing</span>
                    </div>
                    <h3>LuckyPod: <br>Smart Audio</h3>
                    <p>Streamline your podcast and dialogue setups. Apply complex audio effects, manage track volumes, and conform to audio standards reliably.</p>
                </div>
            </div>

            <!-- LuckyFlow -->
            <div class="feature-row reverse">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckyflow.png" alt="LuckyFlow" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Animation • Easing</span>
                    </div>
                    <h3>LuckyFlow: <br>Master Curves</h3>
                    <p>Don't settle for linear movement. Apply professional easing adjustments with a single click, instantly elevating the quality of your animations in Premiere Pro.</p>
                    <ul class="feature-list">
                        <li><span>>></span> Ease In / Out Presets</li>
                        <li><span>>></span> Custom Graph Editor</li>
                        <li><span>>></span> Bezier Precision</li>
                        <li><span>>></span> One-Click Apply</li>
                    </ul>
                </div>
            </div>

            <!-- LuckyNotes -->
            <div class="feature-row">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckynotes.png" alt="LuckyNotes" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Workflow • Organization</span>
                    </div>
                    <h3>LuckyNotes: <br>Intelligent Timeline</h3>
                    <p>Keep your workflow organized in Premiere. LuckyNotes integrates a visual task system right in your editing panel so you never miss an important adjustment.</p>
                    <ul class="feature-list">
                        <li><span>>></span> Smart Project Notes</li>
                        <li><span>>></span> Task List System</li>
                        <li><span>>></span> Status Indicators</li>
                        <li><span>>></span> Export to Text</li>
                    </ul>
                </div>
            </div>

            <!-- LuckyCurves -->
            <div class="feature-row reverse">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckycurves.png" alt="LuckyCurves" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Animation • Precision</span>
                    </div>
                    <h3>LuckyCurves: <br>Clean Keyframes</h3>
                    <p>Gain fine control over your animation curves, easily cleaning and shaping the paths for the smoothest motion possible without leaving your central toolkit.</p>
                </div>
            </div>

            <!-- LuckyAnchor -->
            <div class="feature-row">
                <div class="feature-visual">
                    <div class="neon-glow"></div>
                    <img src="luckyanchor.png" alt="LuckyAnchor" class="feature-image">
                </div>
                <div class="feature-content">
                    <div class="feature-badge">
                        <div class="dot"></div>
                        <span>Precision • Layout</span>
                    </div>
                    <h3>LuckyAnchor: <br>Surgical Control</h3>
                    <p>Precision is key to great editing. Reposition the anchor point of your clips with mathematical exactness, saving minutes of frustrating manual adjustments.</p>
                    <ul class="feature-list">
                        <li><span>>></span> 9-Point Alignment</li>
                        <li><span>>></span> Custom Offsets</li>
                        <li><span>>></span> Shuffle Anchor</li>
                        <li><span>>></span> Real-time Update</li>
                    </ul>
                </div>
            </div>

        </div>
    </main>;

html = html.replace(/<main>[\s\S]*?<\/main>/i, newMain);
fs.writeFileSync(file, html, 'utf8');
