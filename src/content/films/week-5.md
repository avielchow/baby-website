---
week: 5
title: "The Long Evening"
logline: "One witching-hour evening, dusk to full dark, told almost in real time — the light leaves, the crying comes, and two parents dance the whole soothing repertoire until quiet finally arrives, unearned and welcome."
mood: "dusk-lit, patient, unflinching, grainy, devoted"
runtime: "~90 seconds"
lastUpdated: 2026-07-17
draft: false
shots:
  - n: 1
    name: "The last of the light"
    purpose: >-
      The opening image and the film's clock: the final patch of golden-hour sun
      on the living-room floor, shrinking and warming in real time while she lies
      calm on the mat beside it. No timelapse this week — the film runs at life
      speed, and the light leaving is the first thing it refuses to hurry.
    gear: "a7CII + 28mm on tripod"
    settings: >-
      4K24 full-width, 1/50, S-Log3/S-Gamut3.Cine 10-bit. f/2.8 so the sun patch
      AND the mat both read. ISO 800 while the sun still reaches in; WB locked
      5600K so the gold goes properly gold and the shadows already lean cool.
      Expose for the sun patch (zebras 94%, let it sit just under) and let the
      rest of the room start its slide toward evening. Manual focus on the mat.
      Roll a single three-minute take — the edit only needs eight seconds, but
      it needs eight seconds in which the light visibly dims.
    lighting: >-
      The setting sun through the west window is the entire scene. Nothing
      added, nothing bounced — the story is that this light is leaving and
      cannot be replaced. The lamp in the corner stays dark; it gets its
      entrance in shot 3.
    movement: "Locked off. The sun does the moving; the camera bears witness."
    direction: >-
      Shoot the calm before it: she's fed, changed, content on the mat in her
      last easy window of the day. If the fussing has already started when the
      sun hits the floor, shoot the empty patch anyway — an empty frame going
      dark says the same thing.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.35, y: 0.55, label: "Sun patch + baby on the mat" }
      camera: { x: 0.8, y: 0.5, facing: 265, label: "a7CII · 28mm f/2.8" }
      move:
        type: static
        path: [ { x: 0.8, y: 0.5 }, { x: 0.8, y: 0.49 } ]
        label: "Locked — one long take while the light dies"
      note: "Golden hour through the west window; the patch shrinks on camera."
  - n: 2
    name: "The weather changes"
    purpose: >-
      The turn, on her face: calm going cloudy — the brow knitting, the lip
      starting, the first complaint. Week five is the climb toward the crying
      peak, and the film marks the moment the evening tips without cutting away
      from it.
    gear: "a7CII + 85mm on tripod, low beside the mat"
    settings: >-
      4K24, 1/50, S-Log3. 85mm at f/1.8 — her face is the whole world, the
      dimming room melting behind. Light is falling fast now: start at ISO 800
      and step to the second base at 3200 between takes, never mid-take; ceiling
      12800. WB stays locked 5600K — as the daylight cools, the frame is allowed
      to cool with it. Manual focus on her eyes, set before you roll.
    lighting: >-
      The dying window, nothing else. The scene should be visibly darker than
      shot 1 — do not rescue it. If her face falls below readable, move the mat
      half a metre toward the window rather than adding a stick; the light must
      keep its story straight.
    movement: "Locked off. The change happens in her face, not in the frame."
    direction: >-
      You can't direct this and shouldn't try: camera pre-set at mat level
      during the calm, and when the weather turns you get ten seconds of it.
      The instant fussing tips toward real crying, the camera is done and the
      arms take over — a crying baby outranks any shot, tonight and every night.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.4, y: 0.5, label: "Her face — calm to storm" }
      camera: { x: 0.65, y: 0.7, facing: 310, label: "a7CII · 85mm f/1.8" }
      note: "Camera at mat level; the window light fades shot-over-shot."
  - n: 3
    name: "Lamp on — blue hour"
    purpose: >-
      The changing of the guard: the room gone dusk-blue, a parent crosses the
      wide frame with the bundle on a shoulder and switches on the one lamp.
      The film's single warm source is born on camera — from here to the end,
      this lamp is the only sun the family gets.
    gear: "a7CII + 28mm on tripod, wide from the corner"
    settings: >-
      4K24, 1/50, S-Log3. f/2.8, ISO at second base 3200, ceiling 6400 — blue
      hour is dim and the frame should admit it. WB locked 4300K: the window's
      last daylight reads cold blue, and when the 2700K lamp clicks on it blooms
      gold — the whole grade's palette in one cut-free shot. Expose for the
      after: set so the lit lamp pool sits right, and let the before play dark.
      Manual focus a third into the room.
    lighting: >-
      Two states, one source each: dusk window (before), then the corner lamp,
      shade on, ~2700K (after). Stick A hides behind the lamp base at matching
      2700K, low power, pre-rigged and switched with the lamp on the same power
      bar so they come up as one — it boosts the practical a stop and must never
      read as its own source. Lamp on its table an arm's length from any carry
      path: nothing above her, nothing that can tip toward her.
    movement: "Locked off — a proscenium. The parent walks through; the light changes; the camera holds."
    direction: >-
      This is a real event, not a staged one: the lamp goes on every evening
      anyway. Pre-set the frame in the afternoon, hit record when the room goes
      blue, and let whoever's holding her do exactly what they always do. Sway
      while you walk — the bounce in silhouette is the shot.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.4, y: 0.4, label: "Parent + bundle, crossing" }
      camera: { x: 0.85, y: 0.8, facing: 310, label: "a7CII · 28mm f/2.8" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K, switched on-camera" }
        - { x: 0.18, y: 0.25, kind: stick, label: "Stick A · 2700K hidden behind lamp, same switch" }
      note: "Blue window vs. warm lamp — the film's two colours meet in one frame."
  - n: 4
    name: "First S — swaddle"
    purpose: >-
      Chapter one of the repertoire. Week two shot the swaddle slow and
      ceremonial; week five shoots it fast and fluent — the working wrap, done
      by lamplight over real fussing, hands that have folded this five hundred
      times. Competence under fire is its own kind of tenderness.
    gear: "a7CII + 50mm on tripod, side-on to the sofa pad"
    settings: >-
      4K24, 1/50, S-Log3 — no slow motion anywhere in this film; the evening is
      long enough at life speed. f/2.8 so both hands and the wrap hold focus.
      ISO 3200 second base, ceiling 12800. WB locked 4300K so the lamp renders
      golden. Expose for her torso in the lamp pool; the room beyond falls to
      near-black and stays there. Manual focus on the pad, set once.
    lighting: >-
      The shot-3 lamp state exactly: lamp + hidden Stick A, 2700K, one pool.
      The pad sits at the pool's edge so the hands work half in light, half in
      shadow — the film's honesty in lighting form. Nothing over her, nothing
      within tip range of the pad, nothing hot near reach.
    movement: "Locked off. The choreography is in the hands; the frame stays out of their way."
    direction: >-
      Don't stage it — the evening swaddle happens regardless. Camera lives
      pre-framed on the pad from dinnertime; when the wrap starts, roll. She
      will likely be crying through it: that's the truth of the chapter, and
      ten seconds of it is plenty. If she's escalating rather than settling,
      stop rolling and just be her parents.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.4, y: 0.4, label: "Sofa pad — the working wrap" }
      camera: { x: 0.4, y: 0.75, facing: 0, label: "a7CII · 50mm f/2.8" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K" }
        - { x: 0.18, y: 0.25, kind: stick, label: "Stick A · behind lamp" }
      note: "Side-on; hands work at the edge of the lamp pool."
  - n: 5
    name: "Second S — the hold"
    purpose: >-
      Chapter two: the side/stomach hold — swaddled bundle draped along a
      forearm, cheek in the palm, the position that flips the calm switch when
      nothing else will. The frame is about the architecture of it: her whole
      body carried on one adult arm.
    gear: "a7CII + 85mm on tripod"
    settings: >-
      4K24, 1/50, S-Log3. f/1.8 — the forearm and her cheek sharp, the parent
      soft above, the room gone. ISO 3200 second base, ceiling 12800, grain
      worn openly. WB locked 4300K. Manual focus pre-set on where the cradling
      arm will hold — mark the standing spot with tape on the floor so the
      parent brings her to focus, not the reverse.
    lighting: >-
      Lamp pool only. The parent stands just off the lamp so the light rakes
      along the forearm and her face — a raking key sculpts the carry; flat
      light would flatten the point. No sticks beyond the hidden lamp boost.
    movement: "Locked off; the gentle rock of the hold provides all the motion the frame needs."
    direction: >-
      Say it in the guide and mean it on set: side and stomach positions are
      for soothing in awake arms ONLY, never for sleep — back is the only sleep
      position, every time. Shoot the hold while it's working; if her eyes
      start going heavy, the shot is over and she goes down on her back. Ten
      seconds, two takes across the evening, done.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.45, y: 0.45, label: "Bundle along the forearm" }
      camera: { x: 0.7, y: 0.6, facing: 300, label: "a7CII · 85mm f/1.8" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K, raking" }
        - { x: 0.18, y: 0.25, kind: stick, label: "Stick A · behind lamp" }
      note: "Parent on a taped mark at the pool's edge; light rakes the carry arm."
  - n: 6
    name: "Third S — shush"
    purpose: >-
      Chapter three, and the film's sound-design centrepiece: a parent's lips
      an inch from the tiny ear, shushing — steady, oceanic, absurdly loud up
      close. Shot as a near-silhouette; heard like weather. The edit will let
      this sound wash over half the film.
    gear: "a7CII + 85mm on tripod; iPhone (voice memo) taped near the shoulder for clean shush audio"
    settings: >-
      4K24, 1/50, S-Log3. f/1.8. ISO 3200 second base — this frame is
      deliberately the darkest of the S chapters; let it ride up to 12800 before
      even thinking about changing the light. WB locked 4300K. Compose profile-
      on-profile: parent's lips, her ear, the lamp flaring behind them. Manual
      focus on the meeting point of the two profiles.
    lighting: >-
      The lamp moves behind the subjects for this one setup — the only time it
      relocates all night — so parent and baby go to rim-lit silhouette with a
      warm halo and one sliver of lit cheek. Keep the move boring and safe:
      lamp and stick shifted together while she's in the other parent's arms,
      cord re-routed against the wall, still a full arm's length from anyone.
    movement: "Locked off. The audio is the action."
    direction: >-
      Record the sound twice: once live in the take, once clean afterward —
      thirty seconds of the real shush into the iPhone at the same distance
      from the mic that her ear was, no baby needed. Shush in your actual
      rhythm, not a performance; the edit wants the one you really do at
      11 p.m. If the live take upsets her, keep only the clean pass.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.4, y: 0.45, label: "Lips at her ear — profiles" }
      camera: { x: 0.7, y: 0.65, facing: 305, label: "a7CII · 85mm f/1.8" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · moved behind subjects — rim light" }
        - { x: 0.18, y: 0.25, kind: stick, label: "Stick A · travels with the lamp" }
      note: "Backlit silhouette; the lamp flares between the two profiles."
  - n: 7
    name: "Fourth S — sway"
    purpose: >-
      Chapter four: the sway — the standing dance every parent invents without
      being taught. The one moving-camera chapter: a slow half-orbit around
      the two of them, the room wheeling past while they stay the still centre.
      The world moves; the parent is the fixed point. That's the job description.
    gear: "a7CII + 28mm on RS3 Mini"
    settings: >-
      4K24, 1/50, S-Log3. 28mm at f/2.8 — wide enough that the orbit breathes
      and small framing errors forgive. ISO 3200 second base, ceiling 12800.
      WB locked 4300K. Manual focus fixed at the orbit radius (about two
      metres) — a constant-radius arc needs no pull. Active SteadyShot OFF;
      the gimbal does the work and the crop isn't worth it.
    lighting: >-
      Lamp back at its shot-3 home. The orbit is designed around it: the pair
      pass from lit to silhouette and back as the camera comes around — one
      lap of the lamp is one breath of light. Add nothing; the dark half of
      the orbit is half the point.
    movement: >-
      RS3 Mini in Pan Follow, half-orbit left-to-right around the swaying pair
      at a constant two-metre radius: eight slow heel-to-toe side-steps over
      about fifteen seconds, gimbal at chest height, joystick untouched. Wide
      berth always — the arc never tightens and the camera never passes over
      her. One direction, three takes max, pick the smoothest.
    direction: >-
      The swayer ignores the camera completely and dances at the tempo that's
      actually working. If she's mid-meltdown, don't orbit a crisis: put the
      gimbal down, come back to this chapter later in the evening or tomorrow —
      the sway happens nightly; the shot will keep.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.45, y: 0.5, label: "Swaying parent + bundle" }
      camera: { x: 0.7, y: 0.65, facing: 300, label: "a7CII · 28mm on RS3 Mini" }
      move:
        type: orbit
        path: [ { x: 0.7, y: 0.65 }, { x: 0.62, y: 0.3 }, { x: 0.42, y: 0.25 } ]
        label: "Pan Follow · half-orbit, 2 m radius, 8 side-steps"
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K — orbit passes light to dark" }
      note: "Constant radius around the still centre; lit side to silhouette side."
  - n: 8
    name: "Fifth S — suck"
    purpose: >-
      Chapter five, the closer of the repertoire: the pacifier offered, refused,
      offered, taken — and the sudden downshift when the cheeks start working.
      The tightest frame of the five, because this S is the smallest gesture
      with the biggest result.
    gear: "a7CII + 50mm on tripod, close over the sofa arm"
    settings: >-
      4K24, 1/50, S-Log3. 50mm near its close-focus limit at f/2 — the
      pacifier, her lips, the offering fingers; nothing else needs to exist.
      ISO 3200 second base, ceiling 12800. WB locked 4300K. Manual focus preset
      on her mouth with the follow-focus ring; the offering hand comes to the
      plane.
    lighting: >-
      Lamp pool, home position. Seat the holding parent so her face is lamp-side
      and the pacifier hand enters from the shadow side — the gesture arrives
      out of the dark, which is emotionally accurate. No added light.
    movement: "Locked off; the only choreography is fingers, soother, and the slow blink that follows."
    direction: >-
      Five weeks in with feeding established, the soother is fair game — offer
      it as she settles, never force it, and never on a cord or clip. Roll
      before the offer; the refusals are keepers too, so don't cut between
      attempts. If she spits it and howls, that's the chapter some nights —
      film the truth or film nothing, and then put the camera down and help.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.4, y: 0.45, label: "Her mouth + the offered soother" }
      camera: { x: 0.6, y: 0.65, facing: 315, label: "a7CII · 50mm f/2, close" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K key side" }
        - { x: 0.18, y: 0.25, kind: stick, label: "Stick A · behind lamp" }
      note: "Face lamp-side; the pacifier hand enters from shadow."
  - n: 9
    name: "The marathon"
    purpose: >-
      The hallway laps, counted like the distance event they are. One locked
      frame down the hall; the pacing parent crosses it again and again, and
      the edit jump-cuts the passes — lap two, lap five, lap nine — time
      compressing while the frame never moves. Not the week-two low follow;
      this is its opposite: the camera has stopped chasing and started counting.
    gear: "a7CII + 28mm on tripod at the hallway's end"
    settings: >-
      4K24, 1/50, S-Log3. f/2.8 for hallway depth. ISO 3200 second base,
      ceiling 12800 — the hall is genuinely dark and stays that way. WB locked
      4300K for the sconce. Expose for the sconce pool at mid-hall; both ends
      fall to black. Manual focus at the pool. Then the cheapest trick in the
      film: hit record and leave the camera alone for ten minutes. Every pass
      is a take; nobody operates anything.
    lighting: >-
      The hall sconce, ~2700K, one pool at mid-frame — the pacer strides
      dark-light-dark on every lap. If the sconce is too dim even at 12800,
      Stick A sits on the floor tight against the wall inside a doorway,
      2700K aimed at the ceiling, pretending to be spill — floor-placed,
      nowhere near the walking line.
    movement: "Locked off for the whole event. The repetition is the move."
    direction: >-
      Real laps, not performed ones — the pacing happens every evening this
      month. The off-duty parent starts the recording and walks away. Vary
      nothing; the sameness is the material. Ten minutes of record time
      yields maybe eight passes, and the edit needs five.
    diagram:
      room: { w: 6, h: 2 }
      subject: { x: 0.5, y: 0.5, label: "Pacing parent + bundle — lap after lap" }
      camera: { x: 0.06, y: 0.5, facing: 90, label: "a7CII · 28mm, locked 10 min" }
      lights:
        - { x: 0.6, y: 0.12, kind: practical, label: "Hall sconce · 2700K pool" }
      note: "One frame, many laps; the pacer crosses dark-light-dark each pass."
  - n: 10
    name: "Tag out"
    purpose: >-
      The trade-off, mid-dance: one parent's arms are done, the other's take
      over, and the sway never stops — the bundle changes dancers without the
      dance missing a beat. The film's clearest picture of the two-person
      machine, and of the tag-out plan every evening this month runs on.
    gear: "a7CII + 28mm on RS3 Mini"
    settings: >-
      4K24, 1/50, S-Log3. f/2.8, ISO 3200 second base, ceiling 12800. WB locked
      4300K. Manual focus set at the handoff spot before rolling — the push
      travels toward a fixed plane, no pull needed. Frame both parents from the
      start; the shot is about the pair, not either one.
    lighting: >-
      Lamp pool, home position — the trade happens at the pool's edge, so the
      incoming parent literally steps out of the dark to take her. One source,
      one island of light, two tired people sharing it.
    movement: >-
      RS3 Mini in Pan Follow: a slow push from the doorway toward the handoff,
      six heel-to-toe steps over ten seconds, settling to stillness just as the
      transfer completes. The path stays a metre wide of the parents — the
      gimbal never crosses over her, and the transfer itself is four careful
      hands' business, not the camera's.
    direction: >-
      Shoot the real relief shift, whenever it actually comes. The only
      direction allowed: "keep swaying through the pass." Hold on the tapped-out
      parent for a beat after — the empty arms dropping, the shoulders letting
      go. This film loves them too; that beat is why.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.45, y: 0.45, label: "Swaying parent + bundle" }
      subject2: { x: 0.6, y: 0.5, label: "Incoming parent, stepping in" }
      camera: { x: 0.85, y: 0.75, facing: 305, label: "a7CII · 28mm on RS3 Mini" }
      move:
        type: push
        path: [ { x: 0.85, y: 0.75 }, { x: 0.68, y: 0.62 } ]
        label: "Slow push · 6 steps, settle as the handoff lands"
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K — trade at the pool's edge" }
      note: "Push arrives wide of the parents; the sway never stops."
  - n: 11
    name: "The black mirror"
    purpose: >-
      The window that poured gold in shot 1 is now a black mirror: parent and
      baby reflected in the night glass, the lamp's little pool floating in the
      dark behind them. The evening seen from outside itself — the shot the
      whole film has been walking toward.
    gear: "a7CII + 50mm on tripod"
    settings: >-
      4K24, 1/50, S-Log3. f/2 with manual focus pulled to the REFLECTION, not
      the glass — rack there before rolling and leave it. ISO 3200 second base,
      ceiling 12800; the reflection is a stop darker than the room and that's
      correct. WB locked 4300K. Kill any other stray light in the room first —
      one reflection, not a constellation.
    lighting: >-
      The lamp is the entire image twice: once in the room, once floating in
      the glass. Set the camera about 30 degrees off the window plane so its
      own reflection falls outside the frame — check by waving a hand before
      you roll. No sticks; anything added would appear in the mirror and
      confess itself.
    movement: "Locked off. Sway motion in the reflection is all the movement the frame can hold."
    direction: >-
      Steal it during any sway that drifts near the window — guide the swayer
      to the mark with a whisper, then let them forget you. If she's calm
      enough that they both gaze at the glass, you have the shot of the film;
      if not, silhouette-with-reflection is still the shot of the film.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.3, y: 0.45, label: "Parent + baby at the black window" }
      camera: { x: 0.7, y: 0.7, facing: 300, label: "a7CII · 50mm f/2 — focus on reflection" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K, doubled in the glass" }
      note: "Camera ~30° off the glass so its own reflection stays out of frame."
  - n: 12
    name: "The surrender"
    purpose: >-
      The repertoire has run out and nobody's pretending otherwise: a parent
      sits on the floor, back against the sofa, and just holds her on their
      chest — no technique left, only presence. The week's guide says some
      crying can't be soothed by anyone; this is what believing that looks like.
    gear: "a7CII + 28mm on tripod, low — legs splayed short"
    settings: >-
      4K24, 1/50, S-Log3. f/2 — the tableau soft-edged, floor-level, human.
      ISO 3200 second base, ceiling 12800. WB locked 4300K. Frame at seated
      eye height so the camera sits down with them. Manual focus on the pair.
      Roll long — a minute or more; the shot is the not-moving.
    lighting: >-
      The lamp pool grazes them from the side; most of the frame is honest
      darkness. If they've landed outside the pool, do not relight — a
      floor-sitting silhouette against a distant warm lamp tells it even
      better. This scene gets whatever light it gets.
    movement: "Locked off, the longest hold in the film. Stillness is the content."
    direction: >-
      Never staged — this shot only exists if the evening actually produces
      it, and most this month will. Chest-holding is awake, supervised contact:
      the parent stays upright and alert, and if either of them is drifting
      toward sleep, she goes down on her back in the bassinet and the shot ends
      early. If nobody thinks to hit record at this hour, that's the correct
      priority — let it go.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.5, y: 0.6, label: "Parent on the floor, baby on chest" }
      camera: { x: 0.2, y: 0.35, facing: 130, label: "a7CII · 28mm f/2, low" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · 2700K, grazing from the side" }
      note: "Floor-level frame; the lamp pool reaches them or it doesn't."
  - n: 13
    name: "Quiet, not victory"
    purpose: >-
      The put-down: hands lowering the swaddled bundle into the bassinet, on
      her back, nothing else in there — then the hands withdrawing, empty, into
      the dark. Nobody won tonight; the evening just ended. The film refuses a
      triumph beat because the truth is better: quiet came when it came.
    gear: "a7CII + 50mm on tripod beside the bassinet, angled — never over her"
    settings: >-
      4K24, 1/50, S-Log3. f/1.8 — the nursery is the darkest set of the night
      and the lens gives everything it has. ISO 3200 second base, working
      ceiling 12800; this is the frame where grain is fully welcome. WB locked
      3200K for the warm nightlight. Manual focus on the bassinet rail plane,
      set at bedtime prep. Expose so the bundle barely reads and the room
      reads not at all.
    lighting: >-
      One tiny motivated source: the plug-in nightlight (or a lamp dimmed to
      almost nothing in the far corner). Absolutely nothing added, nothing
      above or near the bassinet, nothing on the tripod. If it's too dark at
      12800, it's too dark for a shot — take the still hallway instead and
      let this beat live in sound.
    movement: "Locked off. The camera holds on the empty hands and then the empty frame edge."
    direction: >-
      Camera pre-set beside (never over) the bassinet, recording before they
      come in, off-duty parent nowhere near — one person, one bundle, one
      lower-down. Safe sleep is the composition: on her back, flat, bare
      bassinet, swaddle snug below the shoulders. If she stirs, walk away and
      let the camera run — the re-settle, or the retreat, is footage either way.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: top, from: 0.2, to: 0.6 }
      subject: { x: 0.45, y: 0.35, label: "Bassinet — the put-down" }
      camera: { x: 0.7, y: 0.6, facing: 315, label: "a7CII · 50mm f/1.8" }
      lights:
        - { x: 0.2, y: 0.3, kind: practical, label: "Nightlight · warm, near the floor" }
      note: "Camera beside the bassinet at an angle; nothing ever passes over her."
  - n: 14
    name: "The monitor"
    purpose: >-
      The evening's last light source: the baby monitor glowing on the coffee
      table, her small grey shape on the screen, the parents slumped soft and
      out of focus on the sofa behind it. The house is finally watching her
      sleep instead of holding her awake.
    gear: "a7CII + 50mm on tripod, low across the coffee table"
    settings: >-
      4K24, 1/50, S-Log3. f/2 — monitor screen tack sharp in the foreground,
      parents a warm blur beyond. ISO 3200 second base, ceiling 12800. WB
      locked 4300K: the monitor's glow reads cool against whatever ember of
      lamp remains, and the two-colour story of shot 3 closes here inverted —
      now the cold light is the comforting one. Expose for the screen (it's
      the brightest thing left in the house); let the parents sit in the
      almost-dark. Manual focus on the screen.
    lighting: >-
      The monitor itself is the scene's motivated source, with the lamp dimmed
      to a low ember across the room if it's still on at all. Nothing added.
      If the screen blows out, tilt it a few degrees away from the lens rather
      than stopping down — the parents' exposure is the one that matters.
    movement: "Locked off. Everyone in this frame has earned the right not to move."
    direction: >-
      Zero performance: set the frame, roll two minutes, and let the parents
      be exactly as flattened as they are. A murmured word, a passed mug, a
      head landing on a shoulder — whatever happens is the scene. This film
      loves them; this is the frame where it says so.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.7 }
      subject: { x: 0.5, y: 0.45, label: "Monitor glow — coffee table" }
      subject2: { x: 0.5, y: 0.22, label: "Parents on the sofa, soft" }
      camera: { x: 0.5, y: 0.8, facing: 0, label: "a7CII · 50mm f/2, low" }
      lights:
        - { x: 0.25, y: 0.3, kind: practical, label: "Lamp · dimmed to an ember (or off)" }
      note: "Screen sharp in foreground; the parents a warm blur behind it."
  - n: 15
    name: "The hallway, still"
    purpose: >-
      The final image: the marathon course from shot 9, exactly the same frame,
      now empty and dark — sconce off, no laps left to run. The film ends where
      the work happened, after the work is done. Not a victory lap; a held
      breath, and then the cut to black.
    gear: "a7CII + 28mm on tripod — shot 9's position, re-set by taped marks"
    settings: >-
      4K24, 1/50, S-Log3. Same f/2.8 and focus mark as shot 9 so the two
      frames cut as one. ISO at 12800 — the ceiling, deliberately, for the
      darkest frame of the series; what little spill reaches the hall is all
      the image there is, and the grain at 12800 is the film's texture saying
      goodnight. WB locked 4300K to match its sister shot. Roll thirty
      seconds of nothing.
    lighting: >-
      Sconce OFF. The only light is faint spill from around a doorway — the
      nightlight's last reach, or the monitor's glow leaking from the living
      room. If the frame is pure black, crack one door an inch; that's the
      full extent of the lighting work permitted here.
    movement: "Locked off — the same stillness as shot 9, minus the runner."
    direction: >-
      Shoot it on the way to bed: tripod back on the shot-9 tape marks, roll,
      stand out of frame, breathe for thirty seconds, done. No baby, no
      parents, no cooperation required — the one guaranteed shot of the week,
      and it's the last one.
    diagram:
      room: { w: 6, h: 2 }
      subject: { x: 0.5, y: 0.5, label: "Empty hallway" }
      camera: { x: 0.06, y: 0.5, facing: 90, label: "a7CII · 28mm — shot 9's marks" }
      lights:
        - { x: 0.85, y: 0.15, kind: practical, label: "Faint door-spill · sconce off" }
      note: "Identical frame to shot 9, emptied. Hold long, cut to black."
edit:
  timeline:
    - "New project 3840×2160 at 23.976, DaVinci YRGB with manual CSTs. Bins by chapter: GOLD (1–2), BLUE (3), the five S's (4–8, one bin each), MARATHON (9), TRADE (10–11), QUIET (12–15). The bins are the structure — this film assembles almost in shooting order."
    - "The prime directive of the cut: light only ever decreases. Order every clip so the film darkens monotonically from the sun patch to the black hallway — if a shot plays brighter than the one before it, it's in the wrong place or the balance node needs a trim. Real time is faked by falling light."
    - "Open on shot 1 for a full 8 seconds — long enough that the sun patch visibly dims on screen. Cut to shot 2's face just as the clouding starts; hold through the first complaint. Do not soften either hold."
    - "Shot 3 plays unbroken: dusk room, parent crosses, lamp blooms. Cut OUT on the bloom — the warm flare is the film's act break into the repertoire."
    - "The five S's run as titled chapters — a single lowercase word on black, 12 frames each, before each mini-scene: swaddle. hold. shush. sway. suck. This is the film's one graphic device; keep the type small, warm-white, and gone before it's read twice. Each chapter is setup + one held beat, 5–7 seconds, cut on the gesture completing (the final tuck, the settle into the palm, the latch)."
    - "Lay the clean shush recording under chapters three through five and let it slowly become the film's score-adjacent bed — it enters as sync sound in shot 6 and just never fully leaves until the put-down."
    - "The marathon (shot 9) cuts as counted laps: five passes jump-cut in place, each trimmed so the pacer crosses frame-centre on the cut, holding the empty pool a beat longer after each pass — lap one, two, three, then visibly deeper into the night by lap five. Time compresses; the frame never moves."
    - "Shots 10–12 slow the film down: the tag-out push (hold the emptied parent two full beats after the transfer), the black-mirror reflection at 8 seconds, the floor surrender at 10 — the longest holds in the series. Resist trimming these to pace; their length is their meaning."
    - "The put-down (13) cuts on the hands withdrawing, then monitor (14), then the still hallway (15) for a minimum 5 seconds. Kill the audio a full second before the picture cuts to black — sound leaves the house first."
    - "Target 90 seconds ±5. If it runs long, steal evenly from the S chapters — never from shot 1, never from the quiet block at the end. The film must keep its long evening long at both ends."
  gradeNodes:
    - n: 1
      name: "CST in"
      what: "OFX Color Space Transform: Sony S-Log3 / S-Gamut3.Cine → DaVinci Wide Gamut / Intermediate, tone mapping off. Single-camera film this week — one input transform, no matching headaches; the variation between shots is real light, and the grade's job is to protect it, not iron it."
    - n: 2
      name: "Balance — the staircase"
      what: "Per-shot exposure with Offset/printer lights, judged on the waveform against one rule: each scene sits at or below the previous scene's level. Build it literally — play the timeline top to tail watching the waveform step down like a staircase from the sun patch (~65 IRE skin) to the hallway (~15 IRE and proud of it). Never lift a night shot toward day; noise lives in lifted shadows, and this film's honesty lives in its darkness."
    - n: 3
      name: "Look — ember and ink"
      what: "Timeline-level: Log wheels with Highlight nudged toward amber and Shadow toward a blue-black ink (a touch cooler than week 2's teal — evenings die bluer than nights live). Filmic S-curve in Custom Curves with the black point flared up only 2–3 points: blacks milkier than zero but deeper than the earlier films, because this is the dark one."
    - n: 4
      name: "Skin quiet"
      what: "HSL qualifier on skin, matte softened wide, saturation down ~5, hue nudged toward unified warmth — with extra attention to crying flush: her face runs hot red mid-wail, so let this node calm the red toward truth-adjacent rather than erase it. She was upset; the film says so gently."
    - n: 5
      name: "Halation"
      what: "Luma qualifier on the top end (the lamp bulb, its reflection in the black window, the monitor screen, the sconce pool), Glow OFX large-spread low-gain blended ~15%, tinted warm — except add a second, cool-tinted instance keyed only to the monitor shot so its glow blooms silver, not gold. The two temperatures of comfort, each with its own halo."
    - n: 6
      name: "Grain — the loudest of the series"
      what: "Film Grain OFX, 35mm preset, strongest setting of any week so far — the whole film lives at second-base 3200 up to 12800, and the added grain must fuse with that real noise into one texture rather than sit on top of it. Check the fusion on the hallway and put-down shots at 100% zoom: if you can tell sensor noise from grain, push the grain until you can't."
    - n: 7
      name: "CST out"
      what: "Color Space Transform: DaVinci Wide Gamut / Intermediate → Rec.709 Gamma 2.4, tone mapping DaVinci. Verify the staircase survived the transform — step through the film's first frame of each scene on the scopes one last time; any step that rises got bent by tone mapping and goes back to node 2 for a trim."
  sound:
    - "Room tone twice: 30 seconds of the living room at dusk (fridge hum, street fading) and 30 at full dark (deeper, tighter, the house sealed) — crossfade between them across the film so even silence gets darker."
    - "The crying is in the film, honestly and briefly: real cry audio under shots 2, 4, and the marathon, always mixed under — present enough to be true, never so loud it re-traumatizes the two people this film is for. It thins chapter by chapter through the S's; its gradual retreat IS the story arc in audio."
    - "The shush is the centrepiece: the clean 30-second recording, looped with long crossfades, sitting just under everything from chapter three to the put-down — half sound-design, half score. Pitch it down 2–3 semitones on a second layer at low level and it becomes ocean."
    - "The marathon's percussion is found: the pacer's real footsteps and one floor creak per lap, edited to land evenly — the film's only rhythm section, human and tired."
    - "Keep the small real sounds sacred: the lamp switch click in shot 3 (worth foley-ing with the actual lamp if the take is dirty), the pacifier's first working sounds, the fabric settle of the put-down, the monitor's faint white-noise hiss under shot 14."
    - "The ending is subtraction: after the put-down, drop everything except monitor hiss and room tone; over the still hallway, fade even those, and let the last second of picture play against true silence before the cut to black."
    - "Mix: quieter overall than the other films — score and beds around −26 LUFS-ish, real sounds peaking modestly above; nothing in this film ever hits. The loudest thing in the mix should be the shush."
music: >-
  Less music than any film in the series, and later: nothing at all until the
  lamp comes on, then a single sustained pedal tone — bowed strings, harmonium,
  or a felt-piano drone with no pulse and no melody (the pulse was week 2's
  idea; this film's time is kept by footsteps and shushing). Let the drone
  hold almost unchanged through the S chapters and the marathon, thin to a
  thread under the surrender, and resolve — one soft, consonant piano figure,
  three or four notes at most — only at the put-down; the still hallway plays
  with no music whatsoever. Think the sparse end of the ambient-neoclassical
  pool (Goldmund, A Winged Victory for the Sullen, the quietest Ólafur Arnalds)
  rather than anything that develops. Licensing, same rules as ever for the
  family-gated site with an unlisted embed: a licensed subscription track
  (Artlist/Musicbed personal), a YouTube Audio Library piece, or CC-BY with
  visible credit — Content ID doesn't care that the video is unlisted, so no
  commercial recordings.
---

## The story

Every film so far has flinched a little from the evenings. This one doesn't. Week five sits on the climb toward the crying peak — the guide calls it the loud stretch, and the loudness clusters exactly where the light goes: late afternoon into night. So the film commits to the honest shape of it: one witching-hour evening, dusk to full dark, told nearly in real time. Ninety seconds in which the only clock is the falling light, and the light only ever falls.

**Open** golden: the last patch of sun shrinking on the living-room floor while she lies calm beside it — the day's final easy minutes, spent on camera. Then the weather changes in her face, the room goes blue, and a parent crosses the frame to switch on the one lamp that will be the family's entire sun until morning.

**Middle** is the repertoire, staged as what it actually is: choreography. Five chapters, five S's, each its own mini-scene with its own setup — the working swaddle done fast over real fussing; the forearm hold (soothing in awake arms only, never for sleep — the film says so out loud); the shush, shot as silhouette and heard like weather; the sway, the one orbiting camera move, the room wheeling around two people standing still; the pacifier, offered out of the shadow side and finally taken. Then the marathon: the hallway laps in one locked frame, jump-cut and counted, time compressing while the frame refuses to move. And the trade — one parent tagging out mid-sway, the dance continuing with a new dancer, the emptied arms held on screen for a beat because this film loves the parents, not just the baby.

**Close** without a victory. The black window gives back a reflection of the two of them; the repertoire runs out and a parent simply sits on the floor with her on their chest, out of technique, still present. Then quiet — not won, just arrived: the put-down on her back in the bare bassinet, hands withdrawing empty; the monitor glowing on the coffee table with two soft blurred parents behind it; and last, the marathon hallway again, same frame, no runner, sconce off. Held. Black. The evening was long. It ended. Tomorrow there will be another, and one week soon there won't be.

## Mood & look

This is the high-ISO film — the one the a7CII's second base ISO was bought for. Nearly everything after shot 2 lives at 3200 native, riding to 12800 without apology, and the grade's strongest grain pass in the series fuses the real noise into one texture worn like the week's exhaustion: openly. The lighting rule is one motivated warm source per scene — the lamp, the sconce, the nightlight, finally the monitor — and the discipline is never to rescue the dark around it. Silhouettes are welcome everywhere; a parent as a swaying shape against a lamp pool tells this story better than a lit face ever could.

The palette runs a single long dissolve: gold (the dying sun) → blue (dusk) → ember-and-ink (the lamp hours) → silver (the monitor) → almost nothing (the hall). The edit enforces it as law — brightness only ever decreases — so the film feels like real time even at 90 seconds. No slow motion anywhere: the evening is long enough at life speed, and after week 3's 60p triumph the honest 24 frames are their own statement.

Lens language: the 28mm draws the rooms and the hallway (the geography of endurance), the 50mm does the working frames (swaddle, soother, reflection, monitor), the 85mm goes where the film feels most (her face turning, the hold, the shush). The RS3 Mini moves exactly twice — the sway orbit and the tag-out push — both slow, both wide of her, because in this film stillness is the default and movement has to be earned.

## Prep & shoot-day plan

**One evening on paper, two or three in practice.** The film plays as a single evening; shoot it across however many the week gives you. The frames are repeatable because the evening is — the lamp goes on, the S's get run, the hallway gets paced every single night this month. Batch by scene, not by night: get the golden-hour pair (shots 1–2) on the clearest evening; the lamp-lit chapters (3–8, 10–12) on whichever nights they naturally occur; the marathon and its empty rhyme (9, 15) need the tripod on tape marks — L-brackets around the feet, witness tape on the head, exactly the week-2 method — so the two hallway frames cut as one even if they're shot days apart.

**Rig at dinnertime, shoot when life happens.** Everything in this film is pre-set in daylight and triggered by reality: frame the swaddle pad, tape the hold mark on the floor, wire Stick A behind the lamp on the same power bar, focus the hallway — all before 6 p.m., while hands are steady and nobody's crying. From dusk onward the camera work is just hitting record. The off-duty parent operates; the on-duty parent parents; when the RS3 comes out for its two moves, it waits for a moment that's already working — never orbit a meltdown.

**The camera-down rule, which outranks the film.** This week's material is a fussing baby, and the line is bright: fussing on camera for ten seconds is documentary; a baby tipping into real distress means the camera goes down — set it on the floor mid-take if needed — and the second pair of arms goes in. If an evening is bad enough that nobody thinks about the film, that is the correct outcome, and the week guide's other rule holds on set too: if you're fraying, tag out, and if you're solo and at your limit, she goes down safely on her back and you step away to breathe. No shot on this list is worth more than that, and several shots on this list only exist because that plan was working.

**Safety, standing orders.** Lamp, sticks, and sconce boosts always floor-placed or table-placed at a full arm's length from her, never above her, never where they could tip toward her, nothing hot in reach. The camera and gimbal never pass over her — the sway orbit and the tag-out push are both plotted a wide metre clear. The side/stomach hold is awake-arms soothing only; every sleep, staged or real, is back-down in a bare bassinet, and the put-down shot is framed so safe sleep IS the composition. Short takes around a baby who's feeding or settling. The shot list is a menu, not a contract — and on the hardest evenings, the menu closes early and that's fine. The film's whole argument is that surviving the long evening with tenderness intact is the achievement; the footage is just proof.

**Housekeeping.** Charge everything at dinnertime — every battery, both bodies' worth, the RS3, the Pocket 3 even though it sits out this week; the film's hours are exactly the hours when charging gets forgotten. Two cards: hallway material (the locked ten-minute marathon takes eat space) on one, everything else on the other, offloaded each morning. No ND needed — this film never sees enough light to want it. And record the clean shush pass early in the week; it's thirty seconds of work, it needs no baby, and the entire sound design leans on it.
