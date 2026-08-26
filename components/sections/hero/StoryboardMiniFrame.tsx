import type { HeroStoryboardScene } from "@/config/heroDemo";

export function StoryboardMiniFrame({ scene }: { scene: HeroStoryboardScene }) {
  return (
    <div className="storyboard-scene-frame">
      <div className="scene-visual" aria-hidden="true">
        {scene.id === 1 && (
          <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="scene-svg">
            {/* Scene 1: Melihat soal (student & notebook with question mark) */}
            <rect width="80" height="48" rx="6" fill="#EEF2EA" />
            <circle cx="26" cy="18" r="7" fill="#1C7B72" opacity="0.85" />
            <path d="M16 38C16 31 20 28 26 28C32 28 36 31 36 38" fill="#1C7B72" opacity="0.85" />
            <rect x="44" y="14" width="24" height="24" rx="3" fill="#FFFFFF" stroke="#D0D9D1" strokeWidth="1.5" />
            <line x1="48" y1="20" x2="62" y2="20" stroke="#94A59D" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="48" y1="26" x2="58" y2="26" stroke="#94A59D" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="61" cy="30" r="4" fill="#D9A44A" opacity="0.9" />
            <text x="61" y="32.5" fontSize="5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">?</text>
          </svg>
        )}
        {scene.id === 2 && (
          <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="scene-svg">
            {/* Scene 2: Terasa sulit (question feels big, hesitant) */}
            <rect width="80" height="48" rx="6" fill="#F8EFE4" />
            <rect x="14" y="8" width="52" height="32" rx="4" fill="#FFFFFF" stroke="#DEC8AA" strokeWidth="1.5" />
            <rect x="20" y="15" width="22" height="4" rx="2" fill="#D9A44A" opacity="0.75" />
            <rect x="20" y="23" width="30" height="3" rx="1.5" fill="#C4B49C" opacity="0.6" />
            <rect x="20" y="29" width="16" height="3" rx="1.5" fill="#C4B49C" opacity="0.6" />
            <circle cx="56" cy="24" r="9" fill="#123F39" opacity="0.1" />
            <path d="M54 20C54 18.5 55 17.5 56.5 17.5C58 17.5 59 18.5 59 20C59 21.5 57.5 22 56.5 23V24.5" stroke="#123F39" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="56.5" cy="27.5" r="0.9" fill="#123F39" />
          </svg>
        )}
        {scene.id === 3 && (
          <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="scene-svg">
            {/* Scene 3: Mulai mencoba (taking the step, spark of encouragement) */}
            <rect width="80" height="48" rx="6" fill="#E6F4EE" />
            <rect x="18" y="10" width="44" height="28" rx="4" fill="#FFFFFF" stroke="#B8DCD0" strokeWidth="1.5" />
            <path d="M26 24L32 30L44 18" stroke="#1C7B72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="52" cy="16" r="3.5" fill="#D9A44A" />
            <path d="M52 11V13M52 19V21M47 16H49M55 16H57" stroke="#D9A44A" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <div className="scene-info">
        <span className="scene-number">Scene 0{scene.id}</span>
        <strong className="scene-name">{scene.label}</strong>
      </div>
    </div>
  );
}
