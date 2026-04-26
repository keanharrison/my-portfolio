import React from "react";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-mute"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 first:mt-0">{children}</div>;
}

function WhatILearned({ items }: { items: string[] }) {
  return (
    <Section>
      <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-ink-mute">
        What I Learned
      </p>
      <Bullets items={items} />
    </Section>
  );
}

export const projectDetails: Record<string, React.ReactNode> = {
  "claude-for-good": (
    <>
      <Section>
        <p>
          Claude for Good was a one-day AI hackathon hosted by McIntire and CMIT in
          partnership with Anthropic. 175+ UVA students came to Rouss-Robertson Hall
          for twelve hours to build working tools across three tracks: operations and
          staff support, faculty workflows, and student success. I co-led the event
          alongside Pierce Brookins and Arthur Oker.
        </p>
      </Section>

      <Section>
        <p>
          I owned event design and judging architecture. That meant designing the
          rubric, building the evaluation system that compiled results across rotating
          teams, and structuring the format so judges stayed stationary while teams
          cycled through five-to-seven-minute pitches. We confirmed a 6-person judge
          panel across McIntire faculty and UVA Innovates, and trained them in a
          single 30-minute block before judging began. The other half of the job was
          operations — sponsorship coordination with Anthropic, catering across two
          meals, 17 classroom reservations, and faculty &ldquo;voice of the customer&rdquo;
          rotations throughout the day so teams could pressure-test ideas with real
          educators in real time.
        </p>
      </Section>

      <WhatILearned
        items={[
          "There's a lot more that goes into project management than people at the event would think.",
          "A one-day event takes weeks of preparation and coordination.",
          "Rubric design is product design. What you measure is what teams build toward.",
        ]}
      />
    </>
  ),

  hydra: (
    <>
      <Section>
        <p>
          Hydra is an AI-native operating system for early-stage founders built to
          solve lost context, lost time, and decision paralysis. Early-stage teams
          operate across 5–7 fragmented tools by necessity. 23% of their time is
          wasted on tool-switching, and it takes 23 minutes to refocus after each
          interruption. No tool on the market provides both a unified founder
          operating state and a proactive AI assistant in one place.
        </p>
      </Section>

      <Section>
        <p>
          McCoy and I co-founded Hydra after being selected into UVA&rsquo;s Darden i.Lab
          in November 2025. We ran 20 founder interviews across 5 industries to
          validate the problem, then presented to Startups@UVA for additional
          validation. I led product discovery and translated the insights into MVP
          architecture and a prioritized feature roadmap.
        </p>
      </Section>

      <Section>
        <p>
          The product has two parts. The operating system covers seven sections:
          Product, Team &amp; Equity, Network, Investors &amp; Funding, Compliance,
          GTM, and Tools/Integrations. The AI assistant runs on a RAG-based approach,
          retrieving from user uploads and integrations to give grounded,
          action-oriented recommendations. Together they reduce tool-switching by 24%
          for pilot users. We&rsquo;re scoping the first 5–10 startup pilots out of i.Lab
          now, with formal accelerator pilots planned next.
        </p>
      </Section>

      <WhatILearned
        items={[
          "Founders don't want another dashboard. They want a thinking partner that doesn't override their judgment.",
          "Decision products live or die by trust. Transparent logic mattered more than how sophisticated the model was.",
          "If the system doesn't plug into the tools founders already use, it doesn't get adopted.",
        ]}
      />
    </>
  ),

  bidpilot: (
    <>
      <Section>
        <p>
          BidPilot is an AI proposal autopilot for small government contractors. The
          product takes an RFP PDF and produces a structured compliance matrix, a
          Section L→M evaluation mapping, and AI-generated draft responses with
          hover-to-source citations linking every claim back to the contractor&rsquo;s own
          past performance content. It cuts a typical 20–40 hour proposal response
          down to 4–8 hours.
        </p>
      </Section>

      <Section>
        <p>
          McCoy and I started BidPilot after spending weeks in the CMMC 2.0
          compliance space and realizing the bigger pain was the proposal response
          process sitting next to it. Sub-50-employee contractors submit 10–30
          federal bids a year with no dedicated proposal team, burning $30K–$96K
          annually on repetitive labor. Enterprise tools like Loopio start at
          $20K/year. Generic AI hallucinates and can&rsquo;t cite sources, which
          disqualifies bids.
        </p>
      </Section>

      <Section>
        <p>
          We ran discovery with SMB GovCon leaders, including Jason Rath (VP of
          Development, TeAM), who told us proposal writing was the most tedious part
          of his work and that AI tools didn&rsquo;t validate accuracy. I led product
          scoping and defined the wedge: GovCon-native, SMB-priced ($200–$500/month),
          and traceability-first. No competitor sits in that intersection. The MVP
          targets 85% extraction recall and 60–80% time savings, with Phase 1 aiming
          for 10 paying customers. Distribution runs through APEX Accelerators and
          proposal consultant networks. CMMC Phase 1 went live November 10, 2025,
          putting thousands of SMB defense contractors in compliance-aware tooling
          decisions for the first time.
        </p>
      </Section>

      <WhatILearned
        items={[
          "Market gaps aren't always the biggest pain point. RFP wasn't something I could surface with AI or market research — it surfaced through a discovery call with a 20-year SVP who lives this workflow every day.",
          "Discovery calls beat desk research for finding real pain. The data pointed to compliance; the conversation pointed to proposals.",
          "The wedge gets sharper the closer you get to the buyer.",
        ]}
      />
    </>
  ),

  infino: (
    <>
      <Section>
        <p>
          French, I knew. Business, I didn&rsquo;t. More times than not, I found myself
          lost in conversations with classmates and industry professionals that centered
          around business and company decisions.
        </p>
        <p className="mt-5">
          One day, I thought to myself: &ldquo;What if I built Duolingo — but for learning
          business?&rdquo;
        </p>
      </Section>

      <Section>
        <p>
          With a rough concept in mind, Claude and I conducted competitor analysis and
          market research. Duolingo, Brilliant, Nibble, and Morning Brew were the most
          similar businesses. After some digging, I found my wedge: Infino would be the
          edutainment platform for college students to learn about business and company
          decisions in short, digestible, and research-backed ways.
        </p>
      </Section>

      <Section>
        <p>
          With a UVP and research-backing, I conducted 15 discovery calls across 3 user
          segments and received 38 survey responses. Early feedback surfaced several core
          pain points and motivations.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-ink-mute">
              Pain Points
            </p>
            <Bullets items={["Time constraints", "Topic complexity", "Learning difficulty"]} />
          </div>
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-ink-mute">
              Motivations
            </p>
            <Bullets items={["Interview preparation", "Competitiveness", "Professional growth"]} />
          </div>
        </div>
      </Section>

      <Section>
        <p>
          Next, I created the technical architecture. For the frontend, I chose React
          (Next.js) for fast development, reusable UI, and easy deployment. For the
          database, Supabase to handle user accounts, lesson progress, quiz results, and
          streak data. The AI layer used the OpenAI API to generate explanations, lesson
          content, and follow-up reasoning support. Finally, I used RAG to ground content
          in real company data and news, and implemented streaks, XP, and leaderboards
          for the gamification engine.
        </p>
      </Section>

      <Section>
        <p>
          Eager to see what my potential users would think, I scheduled user testing
          sessions and conducted them using a lantern approach — asking broad questions
          to uncover core pain points and deep desires. With the feedback I received, I
          iterated on the Infino web app and redeployed to users.
        </p>
      </Section>

      <Section>
        <p>
          Two weeks later, Infino users self-reported a 78% increase in understanding of
          business terminology and company decisions. Currently, Infino has 20 active
          users. Infino is a project and mission I&rsquo;m passionate about: widespread, free
          education that optimizes retention and enjoyment whilst helping people feel like
          they&rsquo;re learning, applying, and continually moving forward, rather than being
          passively exposed and then forgetting.
        </p>
      </Section>

      <WhatILearned
        items={[
          "Discovery calls are much more rewarding than survey data.",
          "Rapid iteration trumps relentless feature optimization.",
          "No idea is perfect — if you want to build something, just do it.",
        ]}
      />
    </>
  ),
};
