import React from "react";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
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

export const experienceDetails: Record<string, React.ReactNode> = {
  "anthropic": (
    <>
      <p>
        Co-led Claude for Good, a one-day AI hackathon hosted by McIntire and CMIT in
        partnership with Anthropic. 175+ UVA students came to Rouss-Robertson Hall for
        twelve hours to build working tools across three tracks: operations and staff
        support, faculty workflows, and student success.
      </p>
      <p className="mt-5">
        Owned event design and judging architecture — designing the rubric, building the
        evaluation system across rotating teams, and structuring the format so judges
        stayed stationary while teams cycled through five-to-seven-minute pitches.
        Confirmed a 6-person judge panel across McIntire faculty and UVA Innovates, and
        handled operations end-to-end: sponsorship coordination with Anthropic, catering,
        17 classroom reservations, and faculty &ldquo;voice of the customer&rdquo; rotations
        throughout the day.
      </p>
      <Bullets
        items={[
          "Co-led event with 175+ student attendees across 12 hours of build time",
          "Designed judging rubric and evaluation system across rotating pitch teams",
          "Coordinated directly with Anthropic on sponsorship, logistics, and programming",
        ]}
      />
    </>
  ),

  "booz-allen": (
    <p>
      Joining Booz Allen&rsquo;s Summer Games as a Product Engineer Intern in San Diego,
      working with an agile team building client-facing solutions for federal clients.
      The role spans the full product cycle — discovery research, problem framing,
      prototyping, and stakeholder presentation — with an emphasis on translating
      ambiguous user needs and problem statements into shippable software for
      high-stakes public-sector environments.
    </p>
  ),

  "uva-darden-ilab": (
    <>
      <p>
        Co-founded Hydra, an AI-native workspace that unifies 18+ services into a
        single context layer for early-stage teams. Founders lose hours every week
        re-explaining context to tools and constantly hopping between software and
        systems. We built the layer that does. Hydra was selected into UVA Darden&rsquo;s
        ultra-competitive i.Lab Summer Startup Accelerator to continue development,
        pitch to investors, and learn how to create a successful business.
      </p>
      <Bullets
        items={[
          "Ran 20 lantern-style founder interviews across 5 industries to surface the real cost of context switching",
          "Translated user insights into MVP architecture and a prioritized feature roadmap",
          "Early prototypes reduced tool-switching by 24% across 10 pilot users, measured via task-based time tracking (baseline vs. Hydra)",
        ]}
      />
    </>
  ),

  "techne": (
    <>
      <p>
        Lead a 5-person consulting engagement advising Oracle on LLM procurement for
        U.S. public-sector deployment on Oracle Cloud Infrastructure. The core
        deliverable: a go/no-go evaluation framework for OpenAI, Gemini, and Grok in
        classified-adjacent environments. I owned scope, task assignments, dependency
        management, and final delivery across a 38-day timeline.
      </p>
      <Bullets
        items={[
          "Designed a 24-task benchmark dataset to evaluate LLM readiness for classified environments including agentic vs. reasoning tasks",
          "Producing two final deliverables: a Public Sector LLM Leaderboard and a Grok Strategic Deep Dive",
          "Managing four ICs (Mustafa, Boyi, Ashish, Anshika) on parallel research tracks",
        ]}
      />
    </>
  ),

  "beats": (
    <>
      <p>
        Eight-week contract embedded with Beats&rsquo; product team to identify feature
        gaps in the audio category. I analyzed 4,945 user reviews across 54 products,
        applying PM frameworks and AI tooling to surface tradeoffs, pain drivers, and
        user preferences. The work culminated in a PRD and product recommendation for a
        new all-in-one speaker, presented directly to Beats PMs.
      </p>
      <Bullets
        items={[
          "Identified tradeoff fatigue as the top driver of dissatisfaction across the portfolio — users were forced to choose between sound, portability, and battery, and no product solved for all three.",
          "Recommended an all-in-one speaker concept (sound + portability + battery) anchored in Gen Z buying behavior — $360B+ in spending power, 73% prioritizing quality",
          "Delivered PRD and presentation to Beats' product team covering value prop, design tradeoffs, durability targets, and go-to-market positioning",
        ]}
      />
    </>
  ),

  "stealth": (
    <>
      <p>
        Led product development on memory-enhanced AI features for an early-stage AI
        co-founder web-app. The team needed to solve the &ldquo;every conversation starts
        from zero&rdquo; problem — users were re-prompting the same context across sessions,
        eroding stickiness. I owned feature definition for the long-term memory system
        and made the architectural call between retrieval accuracy and latency.
      </p>
      <Bullets
        items={[
          "Improved response relevance by 70%, reducing user re-prompting",
          "Increased relevant retrieval by 58% via the long-term memory system, enabling cross-session personalization",
          "Recommended RAG-based architecture after evaluating accuracy/latency tradeoffs against alternatives",
        ]}
      />
    </>
  ),

  "johnson-controls": (
    <>
      <p>
        Onboarded as a Sales Engineer Intern and proactively expanded into data
        analytics, analyzing 6,000+ datapoints in Excel to diagnose declining
        conversion rates — treating the problem as a discovery sprint and identifying
        key drivers.
      </p>
      <Bullets
        items={[
          "Identified key drivers of conversion rate decline; recommendations contributed to 37% CR improvement for the Inside Sales Intern team",
          "Generated $7K+ in pipeline in month one — top-performing sales intern in the cohort",
          "Earned additional data analysis scope based on early performance",
        ]}
      />
    </>
  ),

  "keanfit": (
    <>
      <p>
        Founded KeanFit, a personal training business serving the underserved DMV
        communities I grew up in — the customers who couldn&rsquo;t afford boutique gym
        memberships or didn&rsquo;t see themselves represented in mainstream fitness. The
        product was the training program itself: I ran discovery on what clients
        actually needed, designed personalized regimens, and iterated based on client
        data. KeanFit was the first place I learned that shipping a service is mostly
        listening, then doing the unglamorous work of measuring whether it worked.
      </p>
      <Bullets
        items={[
          "Acquired 8 clients in Q1 through cold outreach and community-rooted marketing",
          "Improved client health outcomes by 27% through personalized programming and self-reported surveys",
          "Operated end-to-end: customer acquisition, program design, billing, retention",
        ]}
      />
    </>
  ),
};
