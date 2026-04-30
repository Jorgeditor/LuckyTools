const fs = require('fs');
let lines = fs.readFileSync('index.html', 'utf8').split('\n');

// 1. Exact line replacements based on our checks
lines[137] = '            content: "\\2022";';
lines[278] = '                        <p>LuckyTools is an all-in-one premium plugin for Adobe Premiere Pro, packing multiple integrated panels designed to automate tedious tasks, streamline your workflow, and let you focus on what really matters: your creativity. Everything is a shortcut away &#9889;</p>';
lines[389] = '                        <p>Transparency is key: LuckyTools was built from the ground up with AI assistance. While it is an optimized and stable tool, it\'s important to understand that it may not be as polished as software developed by large teams over many years. Because it was created with the help of AI, you might run into some quirks or minor bugs that wouldn\'t be there in massive corporate tools.</p>';
lines[400] = '                        <p>It does not intend to. The focus with LuckyTools is to group everyday functions to speed up workflows quickly and easily. Because of this, the tools are straightforward in terms of configuration and depth&mdash;the goal is to maintain ease of use without overwhelming settings or complex menus.</p>';

// Badges
lines[738] = '                        <span>Workflow &bull; Speed</span>';
lines[766] = '                        <span>Control &bull; Power</span>';
lines[787] = '                        <span>Assets &bull; Management</span>';
lines[809] = '                        <span>Focus &bull; Speed</span>';
lines[831] = '                        <span>Editing &bull; Speed</span>';
lines[852] = '                        <span>Audio &bull; Multicam</span>';
lines[875] = '                        <span>Workflow &bull; Organization</span>';
lines[1101] = '                        <span>Precision &bull; Layout</span>';

lines[1169] = '                    ">Community Driven &bull; <strong style="color:#9f70fd;">Open Source</strong></div>';

// Text with em-dashes
lines[791] = '                    <p>Please note: LuckyOrganize exclusively manages items within your Premiere Project panel; it does not move external files on your hard drive, nor does it import media directly into your timeline. The configuration is intentionally basic&mdash;just set a folder, name, color, and text filter. No overwhelming settings or complex menus, just a straightforward organizer designed to make your workspace look and feel beautifully structured.</p>';
lines[812] = '                    <p>Revolutionize your framing with dynamic zooms that allow you to define custom start and end points for any shot. Whether you need a smooth zoom-in, a strategic zoom-out, or a point-A-to-B shift, LuckyZoom delivers perfect results every time&mdash;including dynamic static framing.</p>';
lines[1184] = '                            If you\'re looking for a simple, community-made alternative &mdash; or you just need a straightforward way to move anchor points &mdash; <strong style="color: white;">AGR Anchor Editor by <a href="https://www.youtube.com/@MarckDBM" target="_blank" style="color: #9f70fd; text-decoration: none; text-shadow: 0 0 8px rgba(159, 112, 253, 0.4);">@MarckDBM</a> & <a href="https://ytjobs.co/talent/profile/322597" target="_blank" style="color: #9f70fd; text-decoration: none; text-shadow: 0 0 8px rgba(159, 112, 253, 0.4);">@Franjec</a></strong> is a great <strong style="color: #9f70fd;">free</strong> tool you should check out. It was spearheaded by <a href="https://www.youtube.com/@MarckDBM" target="_blank" style="color: #9f70fd; text-decoration: none; text-shadow: 0 0 8px rgba(159, 112, 253, 0.4); font-weight: bold;">Marck</a> with <a href="https://ytjobs.co/talent/profile/322597" target="_blank" style="color: #9f70fd; text-decoration: none; text-shadow: 0 0 8px rgba(159, 112, 253, 0.4); font-weight: bold;">Franjec</a> as his right-hand developer, featuring additional contributions from several editors at the <a href="https://discord.gg/hEa7TpDhGP" target="_blank" style="color: #9f70fd; text-decoration: none;">Busco Editor</a> server.';

// 2. Scan the file for the 'FREE ALTERNATIVE' badge, which might have the broken gift emoji
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('FREE ALTERNATIVE') && (lines[i].includes('Ã') || lines[i].includes(''))) {
        // Replace just the broken emoji part but keep the rest
        lines[i] = lines[i].replace(/".*FREE ALTERNATIVE/g, '">&#127873; FREE ALTERNATIVE');
    }
}

fs.writeFileSync('index.html', lines.join('\n'), 'utf8');
console.log('Exact line replacements completed successfully.');
