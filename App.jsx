export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-gray-100">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">🎬 Mustafa Al-Saedi — My work station</h1>

        <section className="mb-6">
          <p className="text-lg">
            🎞️ I'm a video editor based in Iraq, with professional experience in podcast and commercial editing.
            I specialize in storytelling, clean cuts, color grading, and brand-consistent visuals for YouTube and social media.
            I’ve collaborated with public figures, local cafés, and performance-focused channels to bring their ideas to life visually.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🔗 Project: The Dark Side Podcast</h2>
          <p>
            <a
              href="https://www.youtube.com/@AboAlwess94"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube.com/@AboAlwess94
            </a>
          </p>
          <p className="mt-2">
            🎙️ A long-form Arabic podcast series hosted by Abo Alwess.<br/>
            I was responsible for the full post-production process — from raw footage to final upload.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🛠️ My Role</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Full video editing of all episodes (cutting, pacing, transitions)</li>
            <li>Audio cleanup (noise reduction, EQ)</li>
            <li>Subtitle syncing (when applicable)</li>
            <li>Upload formatting, titles, and optimization support</li>
            <li>Created intros/outros and visual flow to match the host’s branding</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎥 Highlight Episodes</h2>
          <ul className="space-y-4">
            <li>
              <strong>📌 <a href="https://www.youtube.com/watch?v=fc7tPHz-Y6Q&ab_channel=AboAlwess" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">الطب ومحسنات الاداء الدكتور حيدر الزبيدي || برنامج THE DARK SIDE مع ابو الويس</a></strong><br/>
              Episode featuring deep edits with clean audio, topic transitions, and camera angle simulation.
            </li>
            <li>
              <strong>📌 <a href="https://www.youtube.com/watch?v=PHttZz5W2qU&ab_channel=AboAlwess" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">حوار مع العوضي في الجانب المظلم || برنامج THE DARK SIDE مع ابو الويس</a></strong><br/>
              Managed cuts between storytelling and emotional moments; adjusted color tones to match mood.
            </li>
            <li>
              <strong>📌 <a href="https://www.youtube.com/watch?v=suekJ_0tBVw&ab_channel=AboAlwess" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">حوار مع اول محترف عراقي خالد المحسناوي | برنامج THE DARK SIDE مع ابو الويس</a></strong><br/>
              Includes subtle zoom/pan effects and better pacing for engaging storytelling.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📦 Tools I Used</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Adobe Premiere Pro – Main editing</li>
            <li>Adobe Audition – Audio cleanup</li>
            <li>YouTube Studio – Upload & SEO help</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📁 More of My Work</h2>
          <ul className="space-y-4">
            <li>
              <strong>YouTube Channel:</strong> <a href="https://www.youtube.com/@adamleemtb" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@adamleemtb</a><br/>
              I edited the last two videos and the "Enduro Race Dubai" video.
            </li>
            <li>
              <strong>Instagram Reels:</strong>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><a href="https://www.instagram.com/gheym.iq/reels/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@gheym.iq</a> – Full video editing by me</li>
                <li><a href="https://www.instagram.com/kaffeine_iq/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@kaffeine_iq</a> – Full video editing by me</li>
                <li><a href="https://www.instagram.com/nay.cafe.baghdad/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@nay.cafe.baghdad</a> – Full video editing by me</li>
                <li><a href="https://www.instagram.com/thill.iq/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@thill.iq</a> – All reels were edited by me</li>
                <li><a href="https://www.instagram.com/dose_iraq/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@dose_iraq</a> – Last four reels + more upcoming edits</li>
                <li><a href="https://www.instagram.com/reel/DF3WYIFuRTT/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@DF3WYIFuRTT</a> – All reels from this one and above were edited by me</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📩 Contact Me</h2>
          <p>Email: <a href="mailto:mustafa.alsaediedits@gmail.com" className="text-blue-400 hover:underline">mustafa.alsaediedits@gmail.com</a></p>
        </section>
      </div>
    </main>
  );
}
