import "./stack-art.css";

/** A decorative, lightweight illustration of the three layers of a web app. */
export function StackArt() {
  return (
    <div className="stack-art" aria-hidden="true">
      <svg viewBox="0 0 560 490" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="stack-orb" cx="0.32" cy="0.26" r="0.8">
            <stop offset="0" stopColor="#ffbb87" />
            <stop offset="0.36" stopColor="#ef8150" />
            <stop offset="0.73" stopColor="#da542b" />
            <stop offset="1" stopColor="#8d301b" />
          </radialGradient>
          <linearGradient
            id="stack-plate"
            x1="110"
            y1="145"
            x2="445"
            y2="320"
            gradientUnits="userSpaceOnUse"
          >
            <stop className="stack-plane-start" />
            <stop offset="1" className="stack-plane-end" />
          </linearGradient>
          <linearGradient
            id="stack-edge"
            x1="113"
            y1="236"
            x2="447"
            y2="236"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
          </linearGradient>
          <pattern
            id="stack-dot-grid"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.15" />
          </pattern>
          <clipPath id="stack-plane-clip">
            <path d="M289 136 447 222Q458 229 447 236L289 322Q280 327 271 322L113 236Q102 229 113 222L271 136Q280 131 289 136Z" />
          </clipPath>
        </defs>

        <rect
          x="50"
          y="27"
          width="462"
          height="418"
          fill="url(#stack-dot-grid)"
        />
        <path
          className="stack-guideline"
          d="M280 43V442M46 282H513"
          strokeDasharray="3 7"
        />
        <path
          className="stack-corner"
          d="M63 64V47H80M480 47H497V64M63 412V429H80M480 429H497V412"
        />
        <text x="76" y="72" className="stack-tiny">
          SYSTEM / 001
        </text>
        <text x="488" y="72" textAnchor="end" className="stack-tiny">
          FULL STACK
        </text>

        <g className="stack-layer stack-layer-data">
          <g transform="translate(0 104)">
            <path
              className="stack-plane-side"
              d="M108 229V239Q108 243 113 246L271 332Q280 337 289 332L447 246Q452 243 452 239V229L280 319Z"
            />
            <path
              className="stack-plane"
              d="M289 136 447 222Q458 229 447 236L289 322Q280 327 271 322L113 236Q102 229 113 222L271 136Q280 131 289 136Z"
            />
            <g className="stack-inner-grid" clipPath="url(#stack-plane-clip)">
              <path d="M120 170 400 323M158 149 437 302M199 127 478 280M80 193 360 345M120 286 400 133M158 307 437 154M199 329 478 176M80 264 360 111" />
            </g>
            <path className="stack-accent-line" d="m220 251 60 33 60-33" />
            <path
              className="stack-detail"
              d="m144 233 20 11m12 7 8 4m202-22 20-11"
            />
          </g>
        </g>

        <g className="stack-layer stack-layer-logic">
          <g transform="translate(0 52)">
            <path
              className="stack-plane-side"
              d="M108 229V239Q108 243 113 246L271 332Q280 337 289 332L447 246Q452 243 452 239V229L280 319Z"
            />
            <path
              className="stack-plane"
              d="M289 136 447 222Q458 229 447 236L289 322Q280 327 271 322L113 236Q102 229 113 222L271 136Q280 131 289 136Z"
            />
            <path
              className="stack-circuit"
              d="m172 233 39 21 32-17 37 20 38-21 32 18 39-21M211 254v22l34 19m105-41v22l-34 19"
            />
            <path
              className="stack-detail"
              d="m144 233 20 11m12 7 8 4m202-22 20-11"
            />
            <circle cx="245" cy="295" r="2.5" className="stack-node" />
            <circle cx="316" cy="295" r="2.5" className="stack-node" />
            <path className="stack-accent-line" d="m267 275 13 7 13-7" />
          </g>
        </g>

        <g className="stack-layer stack-layer-interface">
          <path
            className="stack-plane-side"
            d="M108 229V239Q108 243 113 246L271 332Q280 337 289 332L447 246Q452 243 452 239V229L280 319Z"
          />
          <path
            className="stack-plane"
            d="M289 136 447 222Q458 229 447 236L289 322Q280 327 271 322L113 236Q102 229 113 222L271 136Q280 131 289 136Z"
          />
          <path
            className="stack-interface-outline"
            d="m280 160 128 69-128 69-128-69Z"
          />
          <path
            className="stack-detail"
            d="m144 233 20 11m12 7 8 4m202-22 20-11m-145 70 18 10 18-10"
          />
          <ellipse
            cx="280"
            cy="228"
            rx="59"
            ry="29"
            className="stack-orb-shadow"
          />
          <ellipse cx="280" cy="228" rx="87" ry="47" className="stack-orbit" />
          <ellipse
            cx="280"
            cy="228"
            rx="99"
            ry="54"
            className="stack-orbit stack-orbit-outer"
            strokeDasharray="2 7"
          />
          <circle cx="367" cy="228" r="3" className="stack-node" />
          <circle cx="203" cy="205" r="2.5" className="stack-node" />
        </g>

        <g className="stack-ball">
          <circle cx="280" cy="164" r="58" fill="url(#stack-orb)" />
          <ellipse
            cx="280"
            cy="164"
            rx="58"
            ry="18"
            stroke="#ffe2cc"
            strokeOpacity="0.24"
            transform="rotate(-30 280 164)"
          />
          <ellipse
            cx="280"
            cy="164"
            rx="26"
            ry="58"
            stroke="#ffe2cc"
            strokeOpacity="0.2"
            transform="rotate(-30 280 164)"
          />
          <path
            d="M233 131C251 108 276 102 297 110"
            stroke="#ffe5d1"
            strokeOpacity="0.44"
            strokeLinecap="round"
          />
        </g>

        <g className="stack-label">
          <path d="M177 185H106L93 172H24" />
          <circle cx="177" cy="185" r="2" />
          <text x="25" y="158" className="stack-label-number">
            01
          </text>
          <text x="48" y="158">
            INTERFACE
          </text>
        </g>
        <g className="stack-label">
          <path d="M405 282H454L467 269H538" />
          <circle cx="405" cy="282" r="2" />
          <text x="455" y="254" className="stack-label-number">
            02
          </text>
          <text x="480" y="254">
            LOGIC
          </text>
        </g>
        <g className="stack-label">
          <path d="M169 365H101L88 378H24" />
          <circle cx="169" cy="365" r="2" />
          <text x="25" y="399" className="stack-label-number">
            03
          </text>
          <text x="49" y="399">
            DATA
          </text>
        </g>

        <g className="stack-caption">
          <rect x="128" y="457" width="304" height="27" rx="13.5" />
          <text x="145" y="475" className="stack-caption-code">
            &lt; / &gt;
          </text>
          <text x="190" y="475">
            From interface to infrastructure
          </text>
        </g>
      </svg>
    </div>
  );
}
