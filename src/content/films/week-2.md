---
week: 2
title: "The Rhythm"
logline: "Nights and days dissolve into one long loop of feeds, swaddles, and handoffs — and somewhere inside the repetition, a rhythm starts to hold."
mood: "circular, hushed, half-lit, tender, hypnotic"
runtime: "~90 seconds"
lastUpdated: 2026-07-17
draft: false
shots:
  - n: 1
    name: "The wall keeps time"
    purpose: >-
      The film's thesis in one image: we don't show clocks all week — time is told
      by light crawling across the same patch of nursery wall. This timelapse is
      the opening beat and the visual key the whole edit returns to.
    gear: "iPhone on the small tripod (or a stack of books), stock Camera app timelapse"
    settings: >-
      Stock timelapse mode (it picks its own interval — that's fine, we want the
      compression). Press-and-hold on the wall to lock AE/AF before you start so
      the exposure doesn't breathe as the sun moves. Frame the wall above the
      crib with a sliver of crib rail at the bottom for scale. Let it run 30–45
      minutes mid-morning while he naps; longer is better if the phone can sit
      undisturbed.
    lighting: >-
      Window light only — the whole point is the uncontrolled sun doing its arc.
      No sticks, no practicals. If the day is overcast, shoot it anyway: soft
      light drifting is its own kind of clock.
    movement: "Locked off, absolutely. Any bump resets the shot — park the phone where nobody walks."
    direction: >-
      This is the one shot that needs zero baby cooperation. Start it, walk away,
      live your morning. Check it hasn't been knocked before you stop it.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.5, y: 0.12, label: "Sunlit wall above the crib" }
      camera: { x: 0.5, y: 0.85, facing: 0, label: "iPhone · timelapse" }
      move:
        type: static
        path: [ { x: 0.5, y: 0.85 }, { x: 0.5, y: 0.84 } ]
        label: "Locked — do not touch for 45 min"
      note: "Window sun rakes across the top wall; the phone just watches."
  - n: 2
    name: "Blackout noon"
    purpose: >-
      Day/night confusion made literal: it's midday, but the master bedroom is
      sealed behind blackout curtains with one knife-blade of sun cutting the
      dark. Establishes that this week, the house has its own time zone.
    gear: "a7CII + 28mm on tripod"
    settings: >-
      4K24 full-width, 1/50, S-Log3/S-Gamut3.Cine 10-bit. f/2.8 for a little
      depth across the room. ISO at second base 3200 — the room is genuinely
      dark and 3200 is the honest choice; ceiling 6400. WB locked 5600K so the
      daylight blade reads white-hot against the murk. Expose for the blade:
      let it sit just under clipping (zebras 94%) and let the rest of the room
      fall into readable shadow. Manual focus on the bed.
    lighting: >-
      One source: the gap in the blackout curtains. Nothing added — the shot is
      about how little light there is. If the blade misses the bed entirely,
      widen the curtain gap an inch rather than adding a stick; the light must
      stay motivated by the window.
    movement: "Locked-off tripod. The only motion is dust in the blade and slow breathing."
    direction: >-
      Shoot during the midday nap when someone's actually dozing next to his
      bassinet — real exhaustion frames better than staged. Baby in his own
      sleep space, on his back, nothing in the bassinet: the safe-sleep rule is
      also the composition.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: right, from: 0.3, to: 0.75 }
      subject: { x: 0.45, y: 0.5, label: "Bed — parent dozing, bassinet beside" }
      camera: { x: 0.12, y: 0.55, facing: 80, label: "a7CII · 28mm" }
      note: "Blackout curtains shut; one blade of noon sun through the gap."
  - n: 3
    name: "3:07 a.m. — the feed"
    purpose: >-
      The heart of the week. One warm lamp, one chair, the middle of the night.
      Every night this scene repeats, so the film treats it like a ritual, not
      an event.
    gear: "a7CII + 85mm on tripod"
    settings: >-
      4K24, 1/50, S-Log3. 85mm wide open at f/1.8 — compression plus shallow
      depth turns the lamp pool into a world. ISO at second base 3200, ceiling
      12800 if the lamp is dim. Embrace the grain means this: expose for the
      lamp's pool on his face and let the room fall away to black — do NOT
      lift shadows in camera or in the grade to "rescue" the corners, because
      noise lives in lifted shadows. A stop of honest darkness plus fine grain
      in the grade reads as texture; a brightened noisy room reads as error.
      WB locked 4300K so the ~2700K lamp renders golden, not orange. Manual
      focus, pre-set on the chair before he wakes.
    lighting: >-
      ONE motivated warm source: the feeding-chair lamp, shade on, 2700K.
      Stick A hides directly behind the lamp base at matching 2700K, low power,
      purely to boost the practical's output a stop — it must never read as a
      second source. Lamp on a side table at adult-shoulder height, a full arm's
      length from the chair: nothing above the baby, nothing that can tip
      toward him, nothing hot within reach.
    movement: "Locked-off. The stillness is the point — set it before the wake-up and let the take run long."
    direction: >-
      Frame and focus the empty chair at bedtime; when the night feed happens,
      hit record and sit down. Short takes, camera runs while the feed simply
      happens. If he's fussy, the camera waits — the schedule always wins.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.35, y: 0.45, label: "Feeding chair — parent + baby" }
      camera: { x: 0.75, y: 0.7, facing: 300, label: "a7CII · 85mm f/1.8" }
      lights:
        - { x: 0.22, y: 0.32, kind: practical, label: "Lamp · 2700K, shade on" }
        - { x: 0.15, y: 0.28, kind: stick, label: "Stick A · 2700K hidden behind lamp" }
      note: "Night. One pool of lamplight; the rest of the room stays black."
  - n: 4
    name: "Feed close — hands and cheek"
    purpose: >-
      The detail pass on shot 3: the working cheek, the hand kneading, milk-drunk
      eyelids. Cuts against the wide as the film's most intimate texture.
    gear: "a7CII + 50mm on tripod, pushed close"
    settings: >-
      4K24, 1/50, S-Log3. 50mm at f/2 — a touch more depth than wide open so
      the cheek AND the hand hold focus. ISO 3200 base, ceiling 12800, same
      grain philosophy as shot 3. WB locked 4300K to match. Manual focus with
      the follow-focus ring: pre-mark cheek focus, drift to the gripping hand
      mid-take — one slow pull, no hunting.
    lighting: "Identical to shot 3 — same lamp, same stick-behind-lamp boost, shot in the same sitting so the light cuts seamlessly."
    movement: "Locked-off frame; the only movement is the focus pull between cheek and hand."
    direction: >-
      Steal this in the same feed as shot 3 — reposition quietly mid-feed, one
      tripod move, no light changes. If the move risks waking him, skip it and
      take it tomorrow night; the frames must feel unhurried.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.35, y: 0.45, label: "Cheek + hand in lamplight" }
      camera: { x: 0.55, y: 0.62, facing: 310, label: "a7CII · 50mm f/2" }
      lights:
        - { x: 0.22, y: 0.32, kind: practical, label: "Lamp · 2700K" }
        - { x: 0.15, y: 0.28, kind: stick, label: "Stick A · behind lamp" }
      note: "Same setup as shot 3, camera walked in close."
  - n: 5
    name: "The diaper ballet"
    purpose: >-
      The most-repeated choreography of the week, shot like the practiced dance
      it's become: four hands, wipes, the fresh diaper spun into place. Comedy
      and competence in one frame.
    gear: "a7CII + 50mm on tripod, side-on to the changing table"
    settings: >-
      4K24, 1/50, S-Log3. f/2.8 so both parents' hands stay sharp through the
      choreography. Day shot: ISO 800 base, WB locked 5600K. If the window
      behind is hot, let it bloom gently rather than stopping down — the
      overexposed window is part of the look. Manual focus set on the changing
      pad; nobody pulls focus during the dance.
    lighting: >-
      Window as key from the top wall, raking across the table. Stick B at
      5600K, low power, bounced off the white wall opposite the window as a
      whisper of fill so the near parent doesn't go silhouette. Both lights
      well away from the table — never above the baby, never within tip range.
    movement: "Locked-off. The hands provide all the motion; the frame stays disciplined."
    direction: >-
      Shoot the third change of the day, not the first — mid-morning light is
      best and everyone's warmed up. Camera lives beside the table, never over
      him. Roll before the diaper comes off and let the whole ballet run; you'll
      cut it to four beats later.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: top, from: 0.1, to: 0.5 }
      subject: { x: 0.35, y: 0.25, label: "Changing table — baby + four hands" }
      camera: { x: 0.8, y: 0.3, facing: 275, label: "a7CII · 50mm f/2.8" }
      lights:
        - { x: 0.7, y: 0.75, kind: stick, label: "Stick B · 5600K bounced off far wall" }
      note: "Camera side-on; window rakes the table. Nothing passes over the baby."
  - n: 6
    name: "The swaddle, slowed"
    purpose: >-
      The wrap as ritual: fold, tuck, fold, the startle of his arms, then the
      settling. Slow motion earns its place here — this is the one gesture of
      the week that deserves to be stretched.
    gear: "a7CII + 50mm on tripod, 45° to the changing pad"
    settings: >-
      4K60 for slow-mo — note the APS-C crop: the 50mm frames like ~75mm, so
      step back or you'll be too tight. 1/125 shutter (the 180° rule at 60p).
      S-Log3, f/2.8, ISO 800 pushed to 1600 if needed — 60p eats a stop and the
      shutter eats another. WB locked 5600K. Manual focus on the pad. Conform
      to 24 in the edit for true 40% slow-mo.
    lighting: >-
      Same window key as shot 5. Because 60p costs light, bring Stick B closer —
      still bounced off the wall, never direct, never near the pad. If the
      exposure still won't reach at ISO 1600, shoot the swaddle at 24p normal
      speed instead and keep the retime for a brighter day; a clean 24p wrap
      beats a noisy 60p one.
    movement: "Locked-off; slow motion supplies the drift."
    direction: >-
      The pre-nap swaddle is the calm one — shoot that, not the overtired
      version. Ask the wrapping parent to slow their hands ten percent; it reads
      as grace, not delay.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: top, from: 0.1, to: 0.5 }
      subject: { x: 0.4, y: 0.2, label: "Changing pad — the wrap" }
      camera: { x: 0.65, y: 0.5, facing: 320, label: "a7CII · 50mm @ 4K60 (crop)" }
      lights:
        - { x: 0.75, y: 0.65, kind: stick, label: "Stick B · 5600K wall-bounce, walked closer" }
      note: "45° angle on the pad; 60p crop means frame wider than feels right."
  - n: 7
    name: "Tiny details — the cord"
    purpose: >-
      The week the cord stump darkens, dries, and lets go — the first thing of
      his to become a keepsake. Paired with the peeling newborn skin on his
      hands: his body is literally shedding its first draft.
    gear: "a7CII + 85mm on tripod at minimum focus distance"
    settings: >-
      4K24, 1/50, S-Log3. The 85mm is not a macro — park it at its minimum
      focus distance (a bit under a metre) and plan to punch in 10–15% in post;
      oversampled 4K holds up. f/2.8 for enough depth to keep the stump and
      surrounding skin sharp. ISO 800, WB locked 5600K. Manual focus, and focus
      by rocking the tripod head a hair, not by the ring — at this distance the
      plane is paper-thin.
    lighting: >-
      Window as key, baby on the bed parallel to it so the light rakes across
      the skin texture — raking light is what makes peeling skin read as
      beautiful instead of clinical. No sticks: bare window softness only.
    movement: "Locked-off. Stillness lets the tiny scale register."
    direction: >-
      Shoot during a calm post-feed window with him on a plain blanket, diaper
      open just enough. Keep takes under a minute; warmth matters more than
      coverage. If the cord falls this week, photograph the empty spot the same
      way — the edit wants the before and after.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.75 }
      subject: { x: 0.5, y: 0.4, label: "Baby on bed — cord stump" }
      camera: { x: 0.5, y: 0.75, facing: 0, label: "a7CII · 85mm @ MFD" }
      note: "Baby parallel to the window so light rakes the skin texture."
  - n: 8
    name: "The grip"
    purpose: >-
      The grasp reflex: a parent's finger offered, his whole fist answering.
      The one shot where he seems to hold on to us instead of the reverse —
      the emotional pivot of the details pass.
    gear: "a7CII + 85mm on tripod"
    settings: >-
      4K24, 1/50, S-Log3. f/1.8 — depth so shallow only the fist is sharp, the
      parent's hand melting soft behind it. ISO 800, WB locked 5600K. Manual
      focus pre-set on where the fist will be; move the finger to the focus,
      not the focus to the finger.
    lighting: "Window key from the left, same bed setup as shot 7 — shoot them in one session, one lighting state."
    movement: "Locked-off."
    direction: >-
      Stroke his palm to trigger the reflex; he does the rest. Give it three
      or four offers across a calm alert window — the take you want is the slow
      curl, not the instant clamp.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.75 }
      subject: { x: 0.45, y: 0.4, label: "His fist around a finger" }
      camera: { x: 0.7, y: 0.6, facing: 310, label: "a7CII · 85mm f/1.8" }
      note: "Same window state as shot 7 — batch these."
  - n: 9
    name: "The stills beat — eyelashes"
    purpose: >-
      A breath in the film: three or four X100VI film-sim stills — eyelashes,
      lips mid-dream, the whorl of hair — held as static frames. Photographs
      inside a film feel like memory doing its filing.
    gear: "Fuji X100VI handheld, braced elbows"
    settings: >-
      Stills, RAW+JPEG with Classic Chrome (or Classic Neg if the room runs
      warm — pick one and keep it for all frames). f/2, auto-ISO 800–3200,
      minimum shutter 1/125. Electronic shutter, silent. Flash OFF and stays
      off — no flash at the baby, ever. Get to the 10cm-ish close-focus range
      for the lash frames.
    lighting: "Whatever window light exists at nap time. Stills forgive what video doesn't — chase no light for this."
    movement: "None during frames — brace, breathe out, shoot. You move between compositions, not during them."
    direction: >-
      Shoot while he sleeps in the bassinet — on his back, nothing else in it
      (the safe-sleep frame is the beautiful frame). Silent shutter means he
      never knows you were there.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.4, y: 0.3, label: "Bassinet — sleeping face" }
      camera: { x: 0.55, y: 0.55, facing: 330, label: "X100VI · stills, silent" }
      note: "Handheld orbit between frames; never directly over him."
  - n: 10
    name: "Shift change — the doorway handoff"
    purpose: >-
      Parents as relay team: one shift ends, the other begins, and the baton is
      a baby passed through a doorway at some hour that no longer has a name.
      The film's clearest image of the two-person machine this week built.
    gear: "a7CII + 28mm on tripod at the end of the hallway"
    settings: >-
      4K24, 1/50, S-Log3. f/2.8 — geography shot, both parents readable. Night:
      ISO 3200 second base, ceiling 12800. WB locked 4300K for the warm hall
      sconce. Expose for the pool of light at the doorway; the hallway ends can
      go dark — the handoff happens in an island of light, which is exactly
      true.
    lighting: >-
      One motivated source: the hall sconce (or a lamp spilling from the
      nursery doorway), warm ~2700K. If the sconce is too dim, Stick A sits on
      the floor inside the nursery door aimed at the ceiling, 2700K, so its
      bounce pretends to be nursery spill. Floor placement, tucked against the
      wall, nowhere near the carry path.
    movement: "Locked-off — a proscenium. The parents walk through the frame; the camera holds."
    direction: >-
      Film the real 5 a.m. swap, not a staged one: set the tripod the evening
      before, hit record on the way to the handoff. Whoever's off-shift walks
      away down the hall — hold the empty doorway three seconds after; the edit
      needs that air.
    diagram:
      room: { w: 6, h: 2 }
      subject: { x: 0.48, y: 0.5, label: "Handoff — baby passed" }
      subject2: { x: 0.62, y: 0.5, label: "Incoming parent" }
      camera: { x: 0.06, y: 0.5, facing: 90, label: "a7CII · 28mm" }
      lights:
        - { x: 0.55, y: 0.12, kind: practical, label: "Hall sconce · 2700K" }
        - { x: 0.68, y: 0.15, kind: stick, label: "Stick A · floor bounce inside nursery door" }
      note: "Long hallway; handoff in the sconce pool, ends of frame fall dark."
  - n: 11
    name: "The witching hour"
    purpose: >-
      The crying begins this week, and the film doesn't flinch: the evening
      pace-and-bounce down the hallway, shot low and behind, endless and loving.
      This is the rhythm at its most relentless.
    gear: "DJI Pocket 3, underslung low mode, following"
    settings: >-
      4K24, D-Log M 10-bit, shutter locked 1/50, WB locked 3200K for the warm
      lamps. The Pocket 3's fixed f/2.0 and small sensor mean night ISO climbs —
      cap auto-ISO at 6400 and accept the noise; it will melt into the grain of
      the grade. Gimbal in Follow mode (pan follows, tilt level), lens flipped
      to low mode.
    lighting: >-
      Whatever the house is: a living-room lamp, the hall sconce. No added
      light — the witching hour is not a lit scene, it's a survived one. Walk
      the path that passes the lamps so the frame breathes light-dark-light.
    movement: >-
      Pocket 3 underslung at knee height, following two metres behind the
      pacing parent's feet and the bounce of the swaddled bundle. Walk
      heel-to-toe, match their pace exactly. One length of the hallway per
      take; three takes max.
    direction: >-
      Shoot the real fussing, but briefly — a crying baby outranks any shot.
      If it tips past fussing into distress, the camera goes down and the
      other pair of arms goes in. Ten seconds of true footage is all the edit
      needs.
    diagram:
      room: { w: 6, h: 2 }
      subject: { x: 0.55, y: 0.5, label: "Pacing parent + bundle" }
      camera: { x: 0.25, y: 0.55, facing: 90, label: "Pocket 3 · low mode" }
      move:
        type: push
        path: [ { x: 0.25, y: 0.55 }, { x: 0.6, y: 0.55 } ]
        label: "Follow 2m behind, matching pace"
      lights:
        - { x: 0.8, y: 0.12, kind: practical, label: "Living-room lamp spill · warm" }
      note: "Low follow along the hallway; frame breathes as lamps pass."
  - n: 12
    name: "Laundry mountains"
    purpose: >-
      The comic-tender inventory shot: a drying rack and sofa arm buried in
      impossibly small clothes. Proof of the cycle in cotton form — someone
      washed all of this, and will again tomorrow.
    gear: "a7CII + 50mm on RS3 Mini"
    settings: >-
      4K24, 1/50, S-Log3, f/2.8 so the rows of onesies hold focus as the frame
      travels. ISO 800, WB locked 5600K, daytime by the window. Manual focus
      fixed at the rack's distance — the slide keeps distance constant, so no
      pull needed.
    lighting: >-
      Window behind the rack so every tiny sock goes translucent at the edges —
      backlit laundry is the whole gag elevated. No sticks; if faces of the
      clothes go too dark, angle the rack 20° toward the window instead of
      adding light.
    movement: >-
      RS3 Mini in Pan Follow, slow lateral slide left-to-right across the rack,
      holding constant distance — walk sideways heel-to-toe, gimbal at chest
      height, ten seconds end to end. One direction only; repeat three times
      and pick the smoothest.
    direction: "No baby needed — shoot during any nap. Don't tidy the pile; the abundance is the truth."
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: top, from: 0.25, to: 0.75 }
      subject: { x: 0.5, y: 0.2, label: "Drying rack — tiny clothes" }
      camera: { x: 0.3, y: 0.6, facing: 0, label: "a7CII · 50mm on RS3 Mini" }
      move:
        type: slide
        path: [ { x: 0.3, y: 0.6 }, { x: 0.7, y: 0.6 } ]
        label: "Pan Follow · lateral slide, constant distance"
      note: "Backlit by the window; socks glow at the edges."
  - n: 13
    name: "The cats' orbit"
    purpose: >-
      The three cats have renegotiated the map: each has claimed a post at a
      fixed radius from the baby. One wide frame, three furry satellites — the
      household's new gravity, observed.
    gear: "a7CII + 28mm on tripod, high corner of the living room"
    settings: >-
      4K24, 1/50, S-Log3, f/4 — this is the one deep-focus frame in the film;
      everything from sofa to sill should read. ISO 800 day (lift to 1600 on a
      dim afternoon), WB locked 5600K. Manual focus a third into the scene.
    lighting: >-
      Big window as the room's key. Stick B at 5600K bounced into the far
      corner only if the rug-cat sits in a cave of shadow — and even then,
      whisper power; the frame should look unlit.
    movement: "Locked-off, minimum 60 seconds — cats reward patience with one tail-flick you'll treasure."
    direction: >-
      You cannot direct cats; you can only choose the hour. Shoot the
      post-lunch stupor when all three are stationed. Bassinet with baby (or
      empty, if he's feeding elsewhere — the orbit reads either way), cats at
      their self-assigned posts.
    diagram:
      room: { w: 6, h: 4 }
      window: { wall: top, from: 0.3, to: 0.7 }
      subject: { x: 0.5, y: 0.45, label: "Bassinet — the centre of gravity" }
      subject2: { x: 0.75, y: 0.3, label: "Cats — sill, sofa arm, rug corner" }
      camera: { x: 0.2, y: 0.8, facing: 40, label: "a7CII · 28mm f/4" }
      lights:
        - { x: 0.85, y: 0.75, kind: stick, label: "Stick B · 5600K corner bounce (only if needed)" }
      note: "One wide, deep frame; three cats at fixed radii from the bassinet."
  - n: 14
    name: "The chair, five times"
    purpose: >-
      The engine of the edit: the identical framing of the feeding chair
      captured at five different hours — dawn, mid-morning, afternoon, dusk,
      deep night. Cut together, the light changes and the ritual doesn't.
      This is "The Rhythm" as a single sentence.
    gear: "a7CII + 50mm on tripod — taped marks, untouched all day"
    settings: >-
      4K24, 1/50, S-Log3 for all five passes. Keep f/2.8 constant and swing
      ONLY ISO between passes: 800 for the day frames, 3200 second base for
      dusk and night. WB strategy: lock 5600K for the four daylight-driven
      passes, relock 4300K for the 3 a.m. lamp pass — the grade will keep skin
      consistent while the room swings gold-to-blue. Manual focus set once on
      the chair and never touched; check the mark before each pass, don't refocus.
    lighting: >-
      Day passes: window only. Night pass: the shot-3 lamp state exactly (lamp
      + Stick A hidden behind it, 2700K). The lamp physically stays in frame
      all day, unlit until dark — continuity of furniture is what sells the
      montage.
    movement: "Locked-off, five times. The tripod does not move between passes — that's the entire trick (see Prep for the taping method)."
    direction: >-
      You don't schedule the baby to the chair; you schedule the camera to the
      feeds. Before each sit-down, hit record, feed as normal, cut after. Two
      of the five passes can be the chair empty — absence is part of the rhythm
      too.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.35, y: 0.45, label: "Feeding chair — five hours" }
      camera: { x: 0.75, y: 0.68, facing: 300, label: "a7CII · 50mm, taped marks" }
      lights:
        - { x: 0.22, y: 0.32, kind: practical, label: "Lamp · unlit by day, 2700K at night" }
      note: "Identical frame ×5; only the light moves. Tripod taped, never lifted."
  - n: 15
    name: "Dawn holds"
    purpose: >-
      The close, rhyming with the opening wall: first light returns to the
      nursery, a parent stands at the window with him, and the loop —
      revealed all film long — resolves into something steady. The rhythm holds,
      and it's carrying them.
    gear: "a7CII + 50mm on RS3 Mini"
    settings: >-
      4K24, 1/50, S-Log3. f/2 for the glow. Dawn interior: ISO 3200 second
      base falling to 800 as the light comes up — set it for the moment you
      roll and don't ride it mid-take. WB locked 5600K so dawn's blue-gold does
      its own colour work. Manual focus on the silhouette, set before the move.
    lighting: >-
      The dawn window is everything: parent and baby as a soft-edged silhouette
      against it. No sticks, no practicals — night's single lamp is off now,
      and that's the story: the day has taken over the lighting.
    movement: >-
      RS3 Mini in Pan Follow, slow push from the doorway toward the window —
      eight slow heel-to-toe steps over fifteen seconds, ending close enough
      that the window fills the frame behind them. One move, no pans mid-push.
    direction: >-
      Shoot after the actual dawn feed, when he's settled on a shoulder —
      swaying is fine, posing isn't. Steer a wide berth around them on the
      approach: the gimbal never passes over him, ever. If dawn and baby refuse
      to align this week, shoot the empty chair in dawn light instead — the
      rhyme still lands.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.3, y: 0.35, label: "Parent + baby at the window" }
      camera: { x: 0.8, y: 0.6, facing: 295, label: "a7CII · 50mm on RS3 Mini" }
      move:
        type: push
        path: [ { x: 0.8, y: 0.6 }, { x: 0.55, y: 0.45 } ]
        label: "Slow push, 8 steps / 15 sec, wide of the baby"
      note: "Dawn through the window; silhouette resolves as the camera arrives."
edit:
  timeline:
    - "New project at 3840×2160, 23.976 fps, DaVinci YRGB (we'll manage colour manually with CSTs so the three cameras can be matched deliberately). Import everything and make four bins: DAY, NIGHT, MOTIF (wall timelapse + chair passes), STILLS."
    - "Lay the spine first: shot 1 (wall timelapse) opens at 6–7 seconds — let the light physically cross the wall before anything else happens. It teaches the audience how to read the film."
    - "Rough in story order, but cut FOR repetition, not against it: feed → diaper → swaddle → feed again. Where week 1 hid the repeats, this film features them — trim so matching actions land in matching screen positions."
    - "Build 'The chair, five times' (shot 14) as its own stacked sequence: five clips, identical frame, cut hard at 1 second each in hour order, then drop the block whole into the timeline about two-thirds through. The metronome cutting IS the rhythm — resist crossfades here."
    - "Hunt match cuts across times of day: the swaddle fold at noon cutting to a fold at 3 a.m.; the doorway handoff cutting to the witching-hour walk mid-stride. Line up the action frames on the cut so time jumps but the gesture continues."
    - "Retime the 60p swaddle (shot 6): right-click → conform is wrong here — instead set clip speed to 40% (60 into 24) with Retime Process: Nearest; no optical flow needed since the frames are real."
    - "Place the stills beat (shot 9): three X100VI frames at 20 frames each, straight cuts, dead silence under them except room tone — a held breath before the doorway handoff."
    - "The night material (shots 3, 4, 10, 11) plays LONG — holds of 6–8 seconds. Day material cuts quicker (2–4 seconds). The film should physically feel like nights stretch and days blur past."
    - "Close on shot 15's push to the window, then let shot 1's wall — same wall, now at dawn — flash back for one final second before the title card. The loop closes on screen."
    - "Trim the whole cut against the music's ostinato: nudge every edit to land on or just after a pulse. Target 90 seconds ±5; if it's long, steal from the day shots, never from the night holds."
  gradeNodes:
    - n: 1
      name: "CST in"
      what: "OFX Color Space Transform: input Sony S-Log3 / S-Gamut3.Cine → DaVinci Wide Gamut / Intermediate, tone mapping off. Pocket 3 clips get their own version of this node (input D-Log M / DJI gamut); X100VI stills come in display-referred, so they skip this node and get a gentle levels match instead."
    - n: 2
      name: "Balance"
      what: "Per-shot exposure and neutrality using Offset and printer-lights hotkeys, judged on the waveform. Day-vs-night strategy: put all clips into two Groups (DAY / NIGHT) and do this normalization in Group Pre-Clip — day skin to ~60–65 IRE, night skin riding lower at ~40–45 IRE so night stays night. Never lift night shadows to day levels; the two worlds should sit a stop and a half apart on the scopes."
    - n: 3
      name: "Look — warm highs, teal lows"
      what: "On the shared timeline level so both groups wear one skin: Log wheels — Highlight toward amber (small move, ~5 points), Shadow toward teal, Midtone untouched. Then the filmic S-curve in Custom Curves with the black point lifted slightly off zero (flare the bottom-left point up ~3–4 points) for that milky-blacks memory feel."
    - n: 4
      name: "Skin quiet"
      what: "HSL qualifier on skin tones, soften the matte heavily, then pull saturation down ~5 and nudge hue toward unified warmth. Newborn skin runs blotchy-red in week 2 — this node calms it without erasing that he's real."
    - n: 5
      name: "Halation"
      what: "Luma qualifier on the top end (roughly 80+ IRE — the lamp bulb, the blown window, the dawn glow), then Glow OFX with large spread and low gain, node blended to ~15% with the glow tinted warm. Sells lamplight and window bloom as photochemical, not digital."
    - n: 6
      name: "Grain"
      what: "Film Grain OFX, 35mm preset, modest strength. In the NIGHT group's Post-Clip, run it a touch stronger so the high-ISO noise and the added grain fuse into one organic texture — this is where 'embrace the grain' is actually cashed in."
    - n: 7
      name: "CST out"
      what: "Color Space Transform: DaVinci Wide Gamut / Intermediate → Rec.709 Gamma 2.4, tone mapping DaVinci. Check the chair montage plays as one family of images here — if any of the five passes drifts, fix it back in node 2, not by bending this node."
  sound:
    - "Room tone first: record 30 seconds of the nursery at night (furnace hum, house tick) and 30 of the living room by day; lay them as beds under their halves so no cut ever falls into digital silence."
    - "The feed is the film's heartbeat — keep the real swallows and little grunts from shots 3–4, dipped low and intimate; they carry more than any score cue."
    - "The washing machine is this week's found percussion: record one full spin-cycle loop on the iPhone, tuck it under the laundry shot and let it bleed a few seconds into the shots on either side — the house itself keeping time."
    - "Witching-hour honesty: keep a few seconds of real crying under shot 11, mixed under the score, then let it resolve to quiet at the doorway handoff. The film earns its dawn by not muting the hard hour."
    - "The stills beat and the chair montage go nearly dry — room tone and the score's pulse only; silence around repetition makes the rhythm audible."
    - "Score enters with shot 1's timelapse, pulses steadily through, and thins to almost nothing under dawn — final image rides window birdsong (record some, any morning) and one last soft piano figure."
    - "Mix: score around −24 LUFS-ish under everything, real sounds peaking above it; nothing hits hard. Fade the whole mix out over the last two seconds rather than cutting."
music: >-
  The film wants an ostinato — a short repeating figure (felt piano, marimba,
  or muted guitar) at roughly 60–70 BPM that loops without building to a big
  resolution, because the whole point is that the loop itself becomes the
  comfort; think of the patient, pulse-driven end of the neoclassical pool
  (Nils Frahm, Ólafur Arnalds, Hania Rani territory) rather than a swelling
  cue. Cut so edits land on the pulse and the film breathes in time with it.
  Licensing for a private, family-gated site with an unlisted YouTube embed:
  commercial recordings are still a poor idea — Content ID can mute or block
  an unlisted video regardless of privacy — so use a properly licensed
  subscription track (Artlist or Musicbed personal plans cover this use), a
  free YouTube Audio Library piece, or a CC-BY work with credit in the page
  text; if in doubt about a specific track's terms, choose one whose license
  page you can actually read.
---

## The story

Week 1 was arrival — the house holding its breath. Week 2 is what happens when the breath has to become breathing: in, out, again. Nothing new occurs this week, and that is the story. Feed, change, swaddle, hand him off, walk the hallway, wash the impossibly small clothes, feed again. The film's job is to show that repetition curdling into rhythm — the moment survival choreography starts to look, from the outside, like a dance.

**Open** on the thesis: sunlight crawling across the nursery wall in timelapse. No clocks anywhere in this film — the wall is the clock. Then the joke and the ache of "blackout noon": midday outside, midnight inside, because the master bedroom now runs on his time zone, not the sun's.

**Middle** is the loop itself, played twice so we feel it repeat. The 3 a.m. feed in one pool of lamplight; the diaper ballet; the swaddle slowed down until it looks like origami done from memory. Then the details pass — the cord stump drying toward its goodbye, the peeling skin, the fist closing around a finger — because inside the blur, his body is quietly finishing itself. The doorway handoff and the witching-hour walk are the hard-currency shots: parents as a relay team, and the crying that arrived this week, unflinched-at. Laundry mountains and the three cats at their new stations widen the frame — the whole household has entered orbit.

**Close** with the engine shot: the feeding chair, identical frame, five hours of light — dawn, morning, afternoon, dusk, deep night — cut like a metronome. And then dawn itself, real and present-tense: a parent at the window with him, the night lamp finally off, the day taking over the lighting. Last image: the same wall from the opening, first light landing on it again. The loop closes. The rhythm holds.

## Mood & look

Circular and hushed. The grade splits the film into two worlds that share one skin: days are milky, window-soft, a little overbright at the edges; nights are one warm pool of lamp against honest black. The rule on set and in the grade is the same — never rescue the darkness. Night shots are exposed for the lamp and allowed to fall away; the grain (real ISO 3200–12800 texture fused with a 35mm grain overlay) is worn openly, like the eye-bags this week earned. Warm highlights, teal-leaning shadows, lifted blacks, a breath of halation on every practical bulb and blown window: memory, photographed while it's still happening.

Framing language: repetition is featured, not hidden. Matching actions sit in matching screen positions so the edit can rhyme noon against 3 a.m. Days cut quick; nights hold long. The 85mm does compressed intimacy (feeds, the grip), the 50mm is the workhorse (ballet, swaddle, chair, dawn), the 28mm draws the geography (blackout bedroom, hallway relay, cat orbit), the Pocket 3 goes low and follows, the X100VI freezes, the iPhone keeps time.

## Prep & shoot-day plan

**This week's special trick — repeatable framing.** Two shots (the wall timelapse and "The chair, five times") only work if the frame never drifts, and shot 15 rhymes with shot 1 on the same wall. The method:

- Pick the tripod's spot for the chair shot and **tape all three feet**: painter's-tape L-brackets around each foot, plus a strip along one leg marking its spread angle. If the tripod must leave the room (it shouldn't), those brackets put it back within a centimetre.
- Tape a **witness mark across the tripod head**: one strip bridging the pan plate and the base, sliced with a pen line — if the two halves of the line meet, your pan hasn't moved. Same trick on the tilt lock.
- **Photograph the framing** on your phone (screenshot the a7CII's monitor with the grid overlay on) and check it against the LCD before every pass. Focus is set once, manually, and never touched — verify by the distance scale, don't re-rack.
- Dedicate one card slot and one battery pouch to this setup so a swap never means moving the camera. Five passes across one day: dawn (~6 a.m.), mid-morning (~10), afternoon (~3), dusk (~7), and whichever night feed you're awake enough to remember to roll on.

**Batching around his day.** Newborn schedules give you three usable windows and this plan spends them deliberately: (1) *Morning nap* — start the wall timelapse, then shoot laundry (shot 12) and the cats (shot 13) while nothing needs you. (2) *Post-feed calm alert* — the details session: cord, grip, and the X100VI stills in one lighting state on the bed, under ten minutes total. (3) *The real events* — feeds, changes, swaddles, the handoff, the witching hour are never scheduled; the camera is pre-set and waiting, and you simply hit record when life happens. The shot list is a menu, not a contract: any shot he vetoes this week goes back on the menu for next week or dies gracefully.

**Housekeeping.** Charge everything nightly — the night shots come when they come, and a dead battery at 3 a.m. is a shot lost forever. Two a7CII batteries staged: one in the camera at the chair setup, one in the charger. Cards: keep the chair-montage passes on one card, everything else on the other, and offload every morning. No ND needed indoors at these apertures; if a windowsill shot clips hard, let it bloom — this film likes its windows a little blown. And the standing safety rules, every setup: lights low, weighted, and away from him; nothing hot in reach; no flash; no camera or gimbal path ever crossing over the baby; staged sleep always back-down in a bare bassinet; takes short around a feeding or sleeping baby. His schedule wins every argument. That's not a limitation on the film — this week, it *is* the film.
