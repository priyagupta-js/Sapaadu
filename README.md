<h1>React + Vite</h1>

<p>
    This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
</p>

<p>Currently, two official plugins are available:</p>
<ul>
    <li><a href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md">@vitejs/plugin-react</a> uses <a href="https://babeljs.io/">Babel</a> for Fast Refresh</li>
    <li><a href="https://github.com/vitejs/vite-plugin-react-swc">@vitejs/plugin-react-swc</a> uses <a href="https://swc.rs/">SWC</a> for Fast Refresh</li>
</ul>

<h2>Expanding the ESLint configuration</h2>
<p>
    If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules.
    Check out the <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts">TS template</a>
    to integrate TypeScript and <a href="https://typescript-eslint.io">typescript-eslint</a> in your project.
</p>

<hr>

<h1>🚀 Vite Project Setup Guide</h1>

<h2>📌 Prerequisites</h2>
<p>Ensure you have the following installed:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> (Recommended: latest LTS version)</li>
    <li><a href="https://git-scm.com/">Git</a> (for cloning the repository)</li>
</ul>

<h2>1️⃣ Clone the Repository</h2>
<pre><code>git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
</code></pre>

<h2>2️⃣ Install Dependencies</h2>
<p>Use npm, pnpm, or yarn to install dependencies:</p>
<pre><code>npm install
# OR
yarn install
# OR
pnpm install
</code></pre>

<h2>3️⃣ Setup Environment Variables</h2>
<p>This project uses a <code>.env</code> file for sensitive configurations. Follow these steps:</p>
<ul>
    <li>Copy the <code>.env.example</code> file and create a <code>.env</code> file:</li>
</ul>
<pre><code>copy .env.example .env  # For Windows (Command Prompt)
</code></pre>
<p>Open <code>.env</code> and update the placeholders with your actual values.</p>

<h2>4️⃣ Start the Development Server</h2>
<p>Run the following command to start the Vite development server:</p>
<pre><code>npm run dev
# OR
yarn dev
# OR
pnpm dev
</code></pre>
<p>This will start the project at <a href="http://localhost:5173/">http://localhost:5173/</a> by default.</p>

<h2>🎉 Happy Coding!!</h2>
