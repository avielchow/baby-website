---
week: 3
title: "Waking Up"
logline: >-
  His eyes open for real this week — and in the long, bright stretches between
  sleeps, he meets the ceiling, the olive tree, your faces, and finally the
  world outside the front door.
mood: "awake, curious, opening up, sun-warmed, quietly triumphant"
runtime: "~90 seconds"
lastUpdated: 2026-07-17
draft: false

shots:
  - n: 1
    name: "His eyes, open"
    purpose: >-
      The thesis of the film in one frame: he is awake now, and he is looking.
      Weeks one and two opened on doorways and sleep; week three opens on open
      eyes, tracking. This is the 85mm moment.
    gear: "Sony a7CII + 85mm on the tripod, follow-focus ring mounted"
    settings: >-
      4K24 full-width, 1/50, f/2.0 (a whisker deeper than wide open so both eyes
      hold), ISO 800 base, WB locked 5500K, S-Log3/S-Gamut3.Cine 10-bit. Manual
      focus. The 85 is not a true macro — it focuses to about 0.8m — so this is
      a very tight face frame, eyes filling the upper third; punch in 15–20% in
      post if you want tighter (4K gives you room). Set focus on his near eye
      with peaking on, then ride the ring in tiny corrections as he moves.
    lighting: >-
      Window light only, 45 degrees off his face so each iris gets a soft
      catchlight. No sticks — anything extra kills the glassy morning look.
      Safety: nothing on stands near or above him, ever; the tripod stays an
      arm's length back.
    movement: >-
      Static, locked off. All the movement in this shot is his — the eyes
      tracking is the shot. Resist the push-in.
    direction: >-
      Build the camera before he wakes, framed on the empty play-mat spot, so
      the alert window is spent shooting, not rigging. Never wake him for it.
      When he's up and calm, lay him down and slowly move yourself along the
      window side of frame — he'll track the biggest, most familiar shape in
      the room, which is you. Two or three 30-second takes, then let the moment
      be his.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.4, y: 0.45, label: "Baby on play mat" }
      camera: { x: 0.72, y: 0.62, facing: 300, label: "a7CII · 85mm" }
      move:
        type: static
        path: [ { x: 0.72, y: 0.62 }, { x: 0.72, y: 0.62 } ]
        label: "Locked off — his eyes do the moving"
      lights: []
      note: "Window 45° to his face for catchlights; parent walks the window side to be tracked"

  - n: 2
    name: "The ceiling show"
    purpose: >-
      The alert-window study begins: what does a three-week-old do with
      wakefulness? He watches the ceiling like it's cinema. Profile of his
      face, eyes darting at light patches — the audience learns to watch him
      watching.
    gear: "Sony a7CII + 50mm on the tripod, low"
    settings: >-
      4K24 full-width, 1/50, f/2.2, ISO 800, WB locked 5500K, S-Log3. Manual
      focus on his upturned eye; at this distance f/2.2 keeps lashes-to-brow
      sharp while the room behind melts. After the main take, grab a 10-second
      insert of the ceiling itself — tilt the tripod head up from your position,
      never repositioning over him.
    lighting: >-
      Raking window light across his face in profile. If the room's dark side
      goes muddy, one stick at 5500K, lowest power, bounced off the far wall as
      ambient lift — never aimed at him, never above him, stand well clear of
      the mat.
    movement: >-
      Static. One long two-minute hold; the edit will find the ten seconds
      where his eyes go somewhere.
    direction: >-
      Alert windows this week are maybe 45–60 minutes and you can't schedule
      them, so this shot lives on the standing set: leave the tripod at this
      height in the corner all week and you can be rolling in thirty seconds.
      Don't dangle anything or direct — the ceiling and the light are the show
      he chose.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.42, y: 0.5, label: "Baby, face up" }
      camera: { x: 0.42, y: 0.82, facing: 0, label: "a7CII · 50mm, low" }
      move:
        type: static
        path: [ { x: 0.42, y: 0.82 }, { x: 0.42, y: 0.82 } ]
        label: "Static profile, long hold"
      lights:
        - { x: 0.85, y: 0.3, kind: stick, label: "Stick A · 5500K bounced off far wall (optional lift)" }
      note: "Camera low at his level, shooting his profile — never from above him"

  - n: 3
    name: "The olive tree and him"
    purpose: >-
      He has favourites now, and one of them is the olive tree. A rack focus
      from the leaves to his eyes draws the line the film is about: the world,
      and him arriving in it.
    gear: "Sony a7CII + 85mm on the tripod, follow-focus ring"
    settings: >-
      4K24 full-width, 1/50, f/1.8 wide open — you want the leaves to be pure
      soft shape when focus lands on him. ISO 800, WB locked 5500K, S-Log3.
      Manual focus with two marks taped on the ring: A = near olive branch in
      the foreground third, B = his eyes. Rehearse the pull on the empty frame
      until it lands in about two seconds without overshoot.
    lighting: >-
      Window behind or beside the olive tree so the leaves get edge-light and
      he sits in the soft spill. No sticks; if his face falls a stop too dark,
      a white foam board (or the 5-in-1 reflector if you picked one up) leaned
      against a chair at floor level, bouncing window light gently up — leaned,
      never on a stand near him.
    movement: >-
      Static camera; the move is the focus pull, A to B, once, slow. Do a
      safety take pulling B to A for the edit to choose from.
    direction: >-
      Set his mat where he already stares at the tree — you've seen him do it,
      so recreate his geometry, not yours. Roll first, pull when his eyes are
      open and still. If he's looking elsewhere, the pull still works; you
      just cut it shorter.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: top, from: 0.55, to: 0.95 }
      subject: { x: 0.35, y: 0.55, label: "Baby on mat" }
      subject2: { x: 0.68, y: 0.25, label: "Olive tree" }
      camera: { x: 0.15, y: 0.85, facing: 40, label: "a7CII · 85mm" }
      move:
        type: static
        path: [ { x: 0.15, y: 0.85 }, { x: 0.15, y: 0.85 } ]
        label: "Static — the move is the focus pull, leaves → eyes"
      lights:
        - { x: 0.2, y: 0.62, kind: reflector, label: "White board leaned low, lifts his face" }
      note: "Tree in the near third, baby beyond — window edge-lights the leaves"

  - n: 4
    name: "The conversation, over your shoulder"
    purpose: >-
      The week's headline: he holds eye contact now. Over the parent's
      shoulder onto his rapt face — half of a two-shot conversation the film
      cuts like dialogue.
    gear: "Sony a7CII + 50mm on the tripod"
    settings: >-
      4K24 full-width, 1/50, f/2.0, ISO 800, WB locked 5500K, S-Log3. Manual
      focus on his eyes; the parent's shoulder and jaw live as soft foreground
      in the left third. Frame him a touch off-centre so the reverse (shot 5)
      cuts cleanly — keep the parent camera-left here, and you'll be
      camera-right in the reverse.
    lighting: >-
      Sit so he faces the window: full soft light on him, the parent's
      shoulder falling dark. That contrast is the shot — his face is the
      bright thing being spoken to. No sticks.
    movement: "Static. Let the take run the whole conversation."
    direction: >-
      Don't perform. Narrate the actual week to him — the tree, the cats, the
      drive — in the sing-song voice you already use. He locks onto faces at
      20–30cm, so hold him close on the lap or knees-up. Roll long; the edit
      wants the second he visibly listens.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: right, from: 0.25, to: 0.75 }
      subject: { x: 0.62, y: 0.45, label: "Baby, facing window" }
      subject2: { x: 0.45, y: 0.55, label: "Parent, back ¾ to camera" }
      camera: { x: 0.22, y: 0.72, facing: 55, label: "a7CII · 50mm OTS" }
      move:
        type: static
        path: [ { x: 0.22, y: 0.72 }, { x: 0.22, y: 0.72 } ]
        label: "Static over-shoulder"
      lights: []
      note: "His face takes the window; parent stays soft and dark in the near third"

  - n: 5
    name: "The conversation, his side"
    purpose: >-
      The reverse: the parent's face mid-sentence, all lit-up and ridiculous
      and in love, with the back of his head soft in the foreground. Cut
      against shot 4, this is the first real dialogue scene of his life.
    gear: "Sony a7CII + 85mm on the tripod"
    settings: >-
      4K24 full-width, 1/50, f/1.8, ISO 800, WB locked 5500K, S-Log3. Manual
      focus on the parent's near eye; his head is a soft shape in the right
      third, mirroring shot 4's geometry so the two shots cut as one scene.
      Shot as a separate take from shot 4 — same seat, same window, camera
      moved to the other side.
    lighting: >-
      Same window, now three-quarter on the parent's face — you inherit the
      matching light direction automatically by keeping everyone in the same
      seats. No sticks.
    movement: "Static."
    direction: >-
      This one needs the other parent holding him, or him propped safely on
      the sitting parent's knees with the camera pre-framed — it is still a
      one-operator shot, just a two-person scene. Keep talking through the
      reframe; the audio from either take can carry both angles.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: right, from: 0.25, to: 0.75 }
      subject: { x: 0.45, y: 0.55, label: "Parent, facing camera" }
      subject2: { x: 0.62, y: 0.45, label: "Baby, back of head near" }
      camera: { x: 0.82, y: 0.28, facing: 205, label: "a7CII · 85mm reverse" }
      move:
        type: static
        path: [ { x: 0.82, y: 0.28 }, { x: 0.82, y: 0.28 } ]
        label: "Static reverse"
      lights: []
      note: "Mirror of shot 4 — cross the line nowhere; same seats, same window"

  - n: 6
    name: "Tummy time: the attempt"
    purpose: >-
      Comedy and heroism at carpet level: the wobble, the face-plant, the
      try-again. The Pocket 3 lives where he lives — one inch off the floor.
    gear: "DJI Pocket 3, handheld in low grip at floor level"
    settings: >-
      4K24, shutter locked 1/50 in Pro mode, D-Log M 10-bit, ISO capped 1600,
      WB locked 5500K. Face-on to him at mat level, lens at his eye height.
      The tiny sensor's extra depth of field is a feature here — the flailing
      stays sharp.
    lighting: >-
      Daylight from the window raking across the mat so every push-up throws
      a little shadow — effort made visible. Nothing else. Keep the mat zone
      completely clear of stands and cables; you are lying on the floor with
      him, and that's the whole rig.
    movement: >-
      Pocket 3 in Follow mode, a slow six-inch slide left-to-right at carpet
      level during his best effort — or just hold still; the gimbal eats your
      breathing either way.
    direction: >-
      Tummy time is already on the schedule — shoot the session you were
      going to do anyway, never add one for the camera. These sessions are
      short at three weeks (a few minutes), so be rolling before he's on his
      front. Frustration is part of the story; roll through one grumble, then
      camera down, rescue him.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.75 }
      subject: { x: 0.5, y: 0.5, label: "Baby, tummy down" }
      camera: { x: 0.78, y: 0.5, facing: 270, label: "Pocket 3, floor level" }
      move:
        type: slide
        path: [ { x: 0.78, y: 0.56 }, { x: 0.78, y: 0.44 } ]
        label: "Follow mode · 6-inch carpet-level slide"
      lights: []
      note: "Window rakes the mat; operator lies on the floor, face-on"

  - n: 7
    name: "Tummy time: the push-up"
    purpose: >-
      The triumph, in slow motion: the head comes up, holds one impossible
      second, and the film gives that second five. The only slow-mo in the
      picture — spent where it's earned.
    gear: "Sony a7CII + 28mm, camera on a beanbag / folded towel on the floor"
    settings: >-
      4K60 — note this is an APS-C crop on the a7CII, so the 28mm frames like
      ~42mm, which lands you at a perfect intimate-normal at floor level.
      Shutter 1/125 (180 degrees at 60p), f/2.8, ISO 800, WB locked 5500K,
      S-Log3. Manual focus pre-set to his head-lift position. Conform to 24fps
      in the edit — 40% speed.
    lighting: >-
      Same raking window as shot 6 — these two shots are one session, one
      setup swap. The low sun-side angle makes the head-lift read as a
      silhouette-edged rise.
    movement: >-
      Static, camera grounded on the beanbag — steadier than any tripod at
      this height and nothing to tip near him.
    direction: >-
      Shoot shot 6 first, then swap to the a7CII for his second wind. The
      lift lasts a second or two; 60p means you only need one. If today's
      session doesn't produce it, tomorrow's will — the shot list is a menu,
      not a contract.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.25, to: 0.75 }
      subject: { x: 0.5, y: 0.5, label: "Baby, mid push-up" }
      camera: { x: 0.72, y: 0.6, facing: 295, label: "a7CII · 28mm (60p crop ≈ 42mm) on beanbag" }
      move:
        type: static
        path: [ { x: 0.72, y: 0.6 }, { x: 0.72, y: 0.6 } ]
        label: "Grounded static · 4K60 for 40% slow-mo"
      lights: []
      note: "Slightly off-axis from shot 6 so the two cut together"

  - n: 8
    name: "The click, and the drive"
    purpose: >-
      The first outing begins with a sound: the car-seat buckle. A tight
      insert of the click, then the quiet wide-eyed ride — his first time
      moving through the world faster than arms can carry him.
    gear: >-
      Insert: a7CII + 28mm handheld (IBIS on). Drive: DJI Pocket 3, held by
      the parent in the seat beside him — never by the driver.
    settings: >-
      Insert (driveway): 4K24, 1/50, f/2.8, ISO 800, WB locked 5500K, S-Log3
      — open shade by the car door needs roughly ND8–ND16 on the variable ND
      to hold 1/50 at f/2.8; spin until the meter sits right. Drive: Pocket 3
      4K24, shutter 1/50 in Pro mode, D-Log M, ISO capped 3200 (car interiors
      are darker than they look), WB locked 5500K so the window light stays
      honest.
    lighting: >-
      All found light. For the insert, put the sun behind the camera side of
      the car so the buckle sits in soft open shade, not blasting sun. In the
      car, the windows do everything; a white burp cloth on the seat beside
      him bounces a surprising amount of fill.
    movement: >-
      Insert: handheld, braced on the door frame, static-ish. Drive: Pocket 3
      in Follow mode, hand-held low and steady, framing his face in the
      rear-facing seat from the adjacent seat. Non-negotiable: filming happens
      only when one parent drives and the other rides in back as camera —
      solo drives are camera-off drives, and nothing is ever rigged where it
      could fly loose.
    direction: >-
      Time the departure just after a feed so the motion lulls instead of
      upsets. Get the click twice at the door (once tight on hands, once
      wider), then put the big camera away. In the car, roll long stretches
      and say nothing — engine hum plus his wide eyes is the scene.
    diagram:
      room: { w: 5, h: 3 }
      subject: { x: 0.68, y: 0.62, label: "Baby, rear-facing seat" }
      subject2: { x: 0.22, y: 0.35, label: "Driver" }
      camera: { x: 0.35, y: 0.68, facing: 85, label: "Pocket 3, adjacent seat" }
      move:
        type: static
        path: [ { x: 0.35, y: 0.68 }, { x: 0.35, y: 0.68 } ]
        label: "Handheld static, braced on knee"
      lights:
        - { x: 0.92, y: 0.15, kind: practical, label: "Sun through rear window" }
      note: "Room box = car cabin. Camera parent rides in back; driver just drives."

  - n: 9
    name: "Open air"
    purpose: >-
      The centrepiece: the stroller rolling through Alberta summer light,
      trees moving overhead, the film physically opening up after two weeks
      indoors. The widest, airiest frames of the whole three-week arc.
    gear: "Sony a7CII + 28mm on the DJI RS3 Mini"
    settings: >-
      4K24 full-width, 1/50, f/2.8 (f/4 if you want the street to read), ISO
      800 base, WB locked 5500K, S-Log3. This is the shot the variable ND was
      bought for: full Alberta sun at ISO 800, 1/50, f/2.8 is about five to
      six stops over — set the variable ND around ND64 in direct sun, backing
      off toward ND16 under trees, and re-check every time the light changes.
      Never fix exposure by raising the shutter; the 1/50 motion is the look.
    lighting: >-
      Sun position is the lighting plan: walk a route where the low sun
      (before 10am or after 5pm — midday Alberta sun in July is brutal and
      toppy) stays behind or beside the camera, edge-lighting the stroller.
      The canopy keeps direct sun off him completely — his shade is
      non-negotiable; the light show happens around him, not on him.
    movement: >-
      RS3 Mini in Pan Follow, heel-to-toe ninja walk, knees soft. One parent
      pushes the stroller at a stroll; the camera parent tracks alongside at
      wheel height rising to canopy height, then drops behind for a following
      frame. If you're out solo, park the stroller (brake on) and walk a slow
      half-arc around it instead — still one operator either way.
    direction: >-
      Shoot the walk you were taking anyway. Three passes maximum — alongside,
      behind, and one from the front walking backwards only if the path is
      smooth and you've scouted it. The gimbal never crosses over the
      stroller; it lives beside and behind.
    diagram:
      room: { w: 6, h: 3 }
      subject: { x: 0.5, y: 0.5, label: "Stroller + pushing parent" }
      camera: { x: 0.28, y: 0.68, facing: 40, label: "a7CII · 28mm on RS3 Mini" }
      move:
        type: slide
        path: [ { x: 0.28, y: 0.68 }, { x: 0.55, y: 0.66 }, { x: 0.78, y: 0.62 } ]
        label: "Pan Follow · ninja walk alongside, then drop behind"
      lights:
        - { x: 0.12, y: 0.12, kind: practical, label: "Sun (low, behind camera-left)" }
      note: "Room box = the sidewalk. Low sun stays behind camera; baby stays in canopy shade."

  - n: 10
    name: "The world, in stills"
    purpose: >-
      A breath in the middle of the outing: four or five X100VI frames cut as
      a stills montage — his hand in the light, the stroller wheel on the
      path, leaf shadows, the street he now belongs to. Texture the video
      can't make.
    gear: "Fuji X100VI, handheld, on the same walk as shot 9"
    settings: >-
      Stills, RAW + JPEG with Classic Chrome (its faded warmth cuts neatly
      into the graded S-Log3 footage). f/2.8–f/4, 1/500 or faster for the
      walking frames, ISO 125; flick on the X100VI's built-in 4-stop ND if
      you want f/2 sun-soaked frames without clipping. No 1/50 rule here —
      stills live by their own physics. Absolutely no flash anywhere near
      him, ever.
    lighting: >-
      The same low sun as shot 9 — shoot with it and across it. Backlit leaf
      shadows on the stroller canopy are the money frame; expose for the
      highlights and let the shadows sink.
    movement: >-
      Static frames, shot from a standstill while the stroller pauses. The
      montage's motion comes from the edit, not the camera.
    direction: >-
      Two-minute detour, ten frames, done. Get one frame of each scale:
      detail (his fingers), object (the wheel), place (the street with
      stroller small in it). That wide place-frame is the arc shot — he is
      in the world now.
    diagram:
      room: { w: 6, h: 3 }
      subject: { x: 0.55, y: 0.5, label: "Stroller, paused (brake on)" }
      camera: { x: 0.3, y: 0.72, facing: 40, label: "X100VI, handheld stills" }
      move:
        type: static
        path: [ { x: 0.3, y: 0.72 }, { x: 0.3, y: 0.72 } ]
        label: "Standstill frames — detail, object, place"
      lights:
        - { x: 0.12, y: 0.12, kind: practical, label: "Sun (low, cross-light)" }
      note: "Same walk as shot 9; stills shot only while the stroller is stopped"

  - n: 11
    name: "The marathon"
    purpose: >-
      The honest beat: growth-spurt week means a day that is mostly feeding.
      One locked frame of the feeding chair, jump-cut across the day — the
      light crossing the room tells the time so nobody has to.
    gear: >-
      Sony a7CII + 50mm on the tripod, taped marks so the frame never moves;
      iPhone wedged on the shelf shooting a timelapse of the window light
      crossing the floor.
    settings: >-
      4K24 full-width, 1/50, f/2.0, S-Log3, WB locked 5500K all day — do not
      re-white-balance at dusk; the frame going warm and dim as the lamp takes
      over IS the storytelling. ISO 800 through the day, allow up to 3200 for
      the last take (the grain reads as tiredness, and that's true). Manual
      focus set once on the chair. iPhone: timelapse mode, locked exposure
      (press-and-hold to lock AE/AF), landscape.
    lighting: >-
      Whatever the day does: hard morning window, flat afternoon, then the
      practical lamp beside the chair as the only source by evening. One stick
      hidden behind the lamp at 3200K, low power, can thicken the lamp's pool
      for the final take — on a shelf or clipped low across the room from
      him, never above, never near.
    movement: "Locked off. Identical frame every take — the cut does the moving."
    direction: >-
      Four takes of 30–60 seconds: morning, midday, late afternoon, lamp-lit
      evening. Start each one after the latch, when things are settled —
      never point a lens at a struggling moment. Tired is allowed in the
      frame; that's the point of the beat. Whoever isn't in the chair taps
      record; the frame is pre-built so it's a ten-second job.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.65 }
      subject: { x: 0.4, y: 0.42, label: "Feeding chair — parent + baby" }
      camera: { x: 0.78, y: 0.75, facing: 315, label: "a7CII · 50mm, taped marks" }
      move:
        type: static
        path: [ { x: 0.78, y: 0.75 }, { x: 0.78, y: 0.75 } ]
        label: "Same frame ×4 across the day — jump cuts"
      lights:
        - { x: 0.3, y: 0.32, kind: practical, label: "Reading lamp (evening key)" }
        - { x: 0.22, y: 0.28, kind: stick, label: "Stick A · 3200K hidden behind lamp, low" }
      note: "iPhone timelapse of light crossing the floor runs from the far shelf"

  - n: 12
    name: "The evening dance"
    purpose: >-
      Dusk brings the fussing, and the fussing brings the dance: a parent
      swaying with him against the blue window, a silhouette that says this
      is hard and beautiful in the same frame.
    gear: "Sony a7CII + 50mm on the tripod"
    settings: >-
      4K24 full-width, 1/50, f/1.8, ISO 800 (up to 3200 as the sky dies —
      test how far you're comfortable; S-Log3 shadows get chunky pushed hard,
      and a little grain here is fine), S-Log3. WB locked 3200K: the dusk sky
      goes rich blue, the lamp inside goes amber — the classic two-colour
      dusk frame for free. Expose for the sky through the window and let the
      figures fall to silhouette; manual focus on the swaying shoulder line.
    lighting: >-
      The window's dying dusk is the backlight; the corner lamp is the amber
      accent. One stick at 3200K, low, behind the lamp shade to strengthen
      its pool if the lamp alone is weak — on the floor across the room,
      nowhere near the dance path, nothing he could be carried into.
    movement: >-
      Static. The sway is the choreography; the camera holds still and lets
      the silhouette move through the window's light.
    direction: >-
      Do not stage the fussing — evening will provide. When the rocking
      starts anyway, tap record and step out of the room's sightline; this
      shot works best when the parent dancing forgets it's rolling. Thirty
      seconds is plenty. If he needs both of you, the camera loses; it
      always loses.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: top, from: 0.3, to: 0.8 }
      subject: { x: 0.55, y: 0.35, label: "Parent swaying with baby" }
      camera: { x: 0.5, y: 0.85, facing: 5, label: "a7CII · 50mm" }
      move:
        type: static
        path: [ { x: 0.5, y: 0.85 }, { x: 0.5, y: 0.85 } ]
        label: "Static — the sway is the move"
      lights:
        - { x: 0.15, y: 0.3, kind: practical, label: "Corner lamp · amber" }
        - { x: 0.1, y: 0.38, kind: stick, label: "Stick B · 3200K low behind shade" }
      note: "Expose for the blue dusk window; figures fall to silhouette"

  - n: 13
    name: "Bath, like we've always done this"
    purpose: >-
      In week one a bath was an event with an audience. Now it's Tuesday.
      Warm water, practiced hands, zero drama — the film shows competence
      where there used to be fear.
    gear: "DJI Pocket 3, handheld — the only camera small enough for the bathroom and cheap enough to risk near steam"
    settings: >-
      4K24, shutter locked 1/50 in Pro mode, D-Log M 10-bit, ISO capped 3200,
      WB locked 3200K to match the bathroom's warm bulbs. Wide-ish framing;
      let the Pocket 3's deep focus keep hands, water, and face all readable.
      Wipe the lens between takes — steam fogs it fast.
    lighting: >-
      The vanity bulbs are the key — warm, top-front, already flattering on
      wet skin. One stick at 3200K standing on the counter at the far end
      from the tub, aimed at the wall for a soft bounce if the room needs
      lift. Hard rules: nothing electrical within reach of water, nothing
      above the tub, and the moment anything needs two hands, the camera goes
      on the counter, lens down, done.
    movement: >-
      Pocket 3 in Follow mode, handheld: one slow drift from the hands
      supporting his head down the length of the tub to his feet kicking.
      One-handed by design — the other parent is the one bathing him; solo
      bath nights are no-camera nights.
    direction: >-
      Shoot the third or fourth bath of the week, not the first — you want
      the routine, and routine only films like routine once it is one. Kicks
      and water sounds are the star; get ten seconds clean of just that.
    diagram:
      room: { w: 4, h: 3 }
      subject: { x: 0.6, y: 0.4, label: "Baby in tub, parent's hands" }
      subject2: { x: 0.75, y: 0.65, label: "Bathing parent" }
      camera: { x: 0.25, y: 0.6, facing: 55, label: "Pocket 3, handheld" }
      move:
        type: slide
        path: [ { x: 0.25, y: 0.6 }, { x: 0.4, y: 0.5 } ]
        label: "Follow mode · slow drift head-to-toes"
      lights:
        - { x: 0.5, y: 0.12, kind: practical, label: "Vanity bulbs · warm key" }
        - { x: 0.12, y: 0.25, kind: stick, label: "Stick A · 3200K wall-bounce, far from water" }
      note: "Camera parent ≠ bathing parent. Anything needs two hands → camera down."

  - n: 14
    name: "The house has absorbed him"
    purpose: >-
      The callback: the same wide, empty-house frames week one opened on —
      re-shot exactly, except now the bassinet lives by the couch, the
      stroller sleeps in the hallway, and the cats sleep beside him like
      they were hired for it. Nobody poses. The house just looks like this now.
    gear: "Sony a7CII + 28mm on the tripod"
    settings: >-
      4K24 full-width, 1/50, f/4 — depth is the point; the gear and the room
      should all read. ISO 800 by day, up to 1600 for a lamp-lit version.
      WB locked 5500K (or 3200K for the evening frame), S-Log3. Pull up the
      week-one clips on your phone and match the Homecoming framings as
      exactly as you can — same corner, same height, same lens. The cut from
      empty to lived-in is the whole gag, and it only lands if the frames rhyme.
    lighting: >-
      Whatever the house is doing — these frames should look found, not lit.
      Day version: window ambience. Evening version: the practicals on, warm
      pools in a dim room. No sticks; honesty is the aesthetic.
    movement: >-
      Static, two or three framings, eight seconds minimum each. Long enough
      that the eye finds the cats.
    direction: >-
      Do not tidy first — the burp cloth on the couch arm is documentary
      gold. Do not place the cats; shoot the frame when they've already
      chosen the bassinet's side, which by week three is most afternoons.
      If he's asleep in the bassinet in frame, he's on his back in a bare
      sleep space — the wide should prove it, because these are the frames
      the family will study.
    diagram:
      room: { w: 6, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.45, y: 0.4, label: "Bassinet by the couch" }
      subject2: { x: 0.55, y: 0.52, label: "Cats, asleep beside it" }
      camera: { x: 0.88, y: 0.82, facing: 310, label: "a7CII · 28mm — match week 1 frame" }
      move:
        type: static
        path: [ { x: 0.88, y: 0.82 }, { x: 0.88, y: 0.82 } ]
        label: "Locked wide, long hold"
      lights:
        - { x: 0.7, y: 0.25, kind: practical, label: "Floor lamp (evening version)" }
      note: "Same corner, height, and lens as week 1's empty-house wide"

  - n: 15
    name: "Almost"
    purpose: >-
      The closer, and the tease: eye contact held longer than it has ever
      been held, and then — a flicker at the corner of his mouth that is
      almost, almost a smile. The film ends leaning forward. So does everyone
      watching it.
    gear: "Sony a7CII + 85mm on the tripod, follow-focus ring"
    settings: >-
      4K24 full-width, 1/50, f/1.8, ISO 800, WB locked 5500K, S-Log3. Manual
      focus nailed on his eyes, same tight face-frame family as shot 1 — the
      film opens and closes on the same glass and the same distance, which is
      the rhyme the three weekly closers share. Roll one long take; do not
      cut the camera when you think you have it.
    lighting: >-
      The shot-1 window setup, late-afternoon edition: light warmer and
      lower, catchlights bigger. No sticks. Nothing new to rig — this is
      deliberately the easiest setup of the week, because you'll be shooting
      it whenever the moment offers itself.
    movement: >-
      Static. If the flicker comes, hold. Three more seconds of stillness
      after it is worth more than any move you could make.
    direction: >-
      Face-to-face at his 20–30cm focus distance, over the seated parent's
      shoulder or on raised knees. Talk softly, smile hugely — real smiles
      get mirrored somewhere between now and week six, and the almost-smile
      is what you're fishing for. If today gives you nothing, tomorrow's
      window is fine; never chase it into an overtired stretch, and never,
      ever wake him to try.
    diagram:
      room: { w: 5, h: 4 }
      window: { wall: left, from: 0.2, to: 0.7 }
      subject: { x: 0.45, y: 0.45, label: "Baby, eyes on parent" }
      subject2: { x: 0.35, y: 0.6, label: "Parent, close" }
      camera: { x: 0.75, y: 0.65, facing: 305, label: "a7CII · 85mm" }
      move:
        type: static
        path: [ { x: 0.75, y: 0.65 }, { x: 0.75, y: 0.65 } ]
        label: "Static hold — wait three beats past the flicker"
      lights: []
      note: "Shot 1's setup, warmer and lower — the film closes where it opened"

edit:
  timeline:
    - >-
      Bins first: SHOT-01 through SHOT-15 plus a SELECTS bin. Scrub each clip
      once, mark I/O on the single best moment, drag selects in — with a
      newborn's shooting ratio this takes twenty minutes, not a night.
    - >-
      Lay the music track first and build to it (see Music below). Drop
      markers on the beats where the track opens up — the outing sequence
      wants to land exactly there.
    - >-
      Assembly in story order, 1 through 15. Opening move: shot 1 (eyes)
      holds a patient 6–8 seconds before the title fades in — same title
      treatment and font as weeks one and two, lower third, unhurried.
    - >-
      The alert-window suite (shots 2–5): medium-slow pace, 4–6 seconds a
      cut. Cut shots 4 and 5 as true dialogue coverage — over-shoulder, then
      reverse on the parent mid-word, then back for his listening face. Use
      one take's audio under both angles so the talking flows across the cut.
    - >-
      Tummy time (6–7): cut from the Pocket 3 wobble straight to the 4K60
      push-up. Retime shot 7 to 40% (60 conformed into a 24 timeline) —
      right-click, "Change Clip Speed," or set the clip's frame rate
      interpretation before the edit; skip optical flow, the real frames are
      the beauty.
    - >-
      The outing (8–10) is where this film changes gear: cuts tighten to
      2–3 seconds — click, wheels, drive, eyes, trees, walk — the fastest
      cutting of the three-week arc, timed to the music's lift. Land the
      X100VI stills as a 4-frame montage, about a second each, with a 2–3%
      slow scale-up on each so they breathe.
    - >-
      Then settle: the marathon (11) is 4 jump cuts in the identical frame,
      about 2 seconds each, morning through lamp-light — cut them on the
      music's downbeat and let the last, dimmest frame run long. Optionally
      underlay two seconds of the iPhone floor-light timelapse before it as
      punctuation.
    - >-
      Evening block (12–13) slows to week-one pace: dusk silhouette, then
      bath, 5–6 seconds each. This is the film exhaling after the outing.
    - >-
      The callback (14): if the week-one project is on this machine, match-cut
      the empty-house wide from Homecoming (2 seconds) directly into the same
      frame lived-in — hard cut, no dissolve; the gag is the geometry. If
      not, shot 14 still plays alone as a long quiet wide while the music
      thins out.
    - >-
      Closer (15): longest hold of the film, 8–10 seconds. Cut to black on
      the almost-smile flicker itself — not after it. End card matches weeks
      one and two.
    - >-
      Trim pass against the runtime: ~90 seconds. The alert-window suite is
      where the flab hides; the outing and the closer are untouchable.
    - >-
      J-cut the sound throughout the transition into the outing: birds and
      stroller wheels sneak in under the last interior shot before the
      picture cuts outside (details in Sound).
  gradeNodes:
    - n: 1
      name: "CST In"
      what: >-
        Color Space Transform: input Sony S-Log3 / S-Gamut3.Cine, output
        DaVinci Wide Gamut / DaVinci Intermediate. Put Pocket 3 clips in their
        own group with their own CST (input DJI D-Log M) so both cameras meet
        in the same working space before any look. X100VI stills are already
        display-referred — leave them out of the CST chain and just trim them
        to taste at the end.
    - n: 2
      name: "Balance & match"
      what: >-
        Per-clip exposure and cast using Offset and printer-lights, eyes on
        the waveform. The real work this week is interior vs. exterior: bring
        the sunlit outing clips' highlights down with Gain until skin sits at
        a similar level to the window-lit interiors, so the cut outside feels
        brighter but not blown. Locked WB on set means this node stays honest
        — you're matching light, not fixing drift.
    - n: 3
      name: "Look — filmic curve"
      what: >-
        The series look, identical to weeks one and two: gentle S-curve in
        Custom Curves with the toe lifted so blacks float slightly milky;
        highlights rolled early. Outdoors this earns its keep — Alberta sun
        wants to crunch the curve, so check the outing clips on the waveform
        and soften the shoulder until the sky rolls off instead of clipping.
    - n: 4
      name: "Look — colour"
      what: >-
        Warm highlights, teal-leaning shadows: on the Log wheels, push
        Highlight toward orange and Shadow toward teal in small moves; keep
        exteriors a touch less teal-shadowed than interiors or the grass goes
        wrong. Sat vs Lum to tame the stroller-walk greens. One Color Warper
        nudge on skin toward peach if the S-curve left it pale.
    - n: 5
      name: "Skin & eyes"
      what: >-
        Soft qualifier on faces: tiny Midtone Detail reduction (−5 to −10)
        for newborn skin, and on shots 1 and 15 a subtle circular Power
        Window over the eyes with +0.05 Gamma — the catchlights are the
        story, help them quietly.
    - n: 6
      name: "Halation & grain"
      what: >-
        The texture pass: on Resolve 19+, one Film Look Creator node (or your
        week-one preset) with halation low and subtle, grain 35mm at low
        strength; on older versions, parallel node — qualify the top of the
        waveform, Gaussian blur, composite Add at 10–15%, tinted warm — plus
        the Film Grain OFX. Keep settings identical to weeks one and two so
        the series feels like one film stock; the sunny exteriors will show
        halation more, which is exactly the vintage-summer look you want.
    - n: 7
      name: "CST Out"
      what: >-
        Color Space Transform: DaVinci Wide Gamut / Intermediate in, Rec.709
        Gamma 2.4 out, tone mapping DaVinci, "Saturation Mapping" on. Nothing
        creative after this node. Export a still of an interior and an
        exterior frame into the gallery and A/B them against week two's
        stills before rendering.
  sound:
    - >-
      The baseline is still the quiet house: lay the room-tone bed you
      recorded in weeks one and two under every interior, so this film starts
      sounding like the previous two.
    - >-
      Record 30 seconds of wild sound at each outing location on whatever is
      running — Pocket 3 audio is genuinely decent, the a7CII's onboard mic
      picks up wind badly, so favour the Pocket 3 tracks outdoors and put a
      high-pass filter (Fairlight EQ, roll off below ~100Hz) on everything
      shot in moving air.
    - >-
      The outside world enters early: J-cut birds and distant street under
      the last interior shot before the outing, 2 seconds ahead of the
      picture — the film hears the world before it sees it.
    - >-
      Featured spot effects, each −10 to −6 under the music: the car-seat
      click (this is the beat drop of the whole film — give it a clean,
      almost-solo moment), stroller wheels on the path, wind in the trees,
      bath-water kicks.
    - >-
      Keep his actual sounds sacred: coos and grunts from the conversation
      and tummy-time takes ride above the music; automate the music down
      3–4dB whenever he vocalizes.
    - >-
      The marathon jump cuts share one continuous room-tone bed so the hard
      picture cuts feel soft; let the lamp-lit final take keep a hint of the
      evening quiet.
    - >-
      Mix targets as before: dialogue/baby around −12dB, music −18 to −24
      under content, effects tucked between. Ears fresh, one full pass on
      headphones and one on the TV before export.
music: >-
  Weeks one and two lived on sparse felt piano; this film wants the same
  family of sound with the windows open — piano still underneath, but with
  warm strings or a soft acoustic pulse that lifts exactly when the stroller
  hits the sidewalk, then thins back to solo piano for the dusk-and-closer
  stretch. Look for "hopeful," "morning," or "first steps" moods around
  90–110 BPM with a clear build at the 30–40 second mark, and cut the outing
  to that build. For a private, unlisted family film, safest is a personal
  license from a library like Artlist, Musicbed, or Epidemic Sound — or
  YouTube's own Audio Library, which is free and safe even if a link escapes
  the family group chat. Commercial songs will likely get Content-ID claimed
  even unlisted; a claim won't take the video down, but ads can appear over
  your son's face, which is reason enough to stay licensed.
---

## The story

Week three has a plot twist, and the plot twist is that he's *in* there. The
first two films were about him arriving and about you all surviving the
arrival — he was the still center that everything moved around. This week the
eyes open, properly and for real, and stay open in long bright stretches, and
suddenly there is a person in the bassinet conducting a serious study of the
ceiling.

So the film opens on the eyes — tracking, deliberate, backlit by the morning
window — and spends its first act just watching him watch: the ceiling, the
olive tree, and then the best thing in his world, which is a face talking to
him from thirty centimeters away. We shoot that conversation like a real
scene, over-the-shoulder and reverse, because it *is* a real scene now; he
holds up his end with his whole body.

The middle act is effort and adventure. Tummy time gives us the week's action
sequence — the wobble, the face-plant, and then, in the film's only slow
motion, the head coming up and holding. Then the front door opens for the
first real outing: the car-seat click, the wide-eyed drive, and the stroller
rolling into Alberta summer light with the camera gliding alongside. The
cutting gets quicker here than anywhere in the three-week arc — the film
physically wakes up with him.

Then it settles, because weeks still have evenings. The growth-spurt marathon
compresses a whole cluster-feed day into four honest jump cuts of the same
chair as the light crosses the room. Dusk brings the fussing and the swaying
silhouette; bath night, once a trembling event, is now just Tuesday. And then
the callback: the same empty wides the Homecoming film opened on, re-framed
exactly — except the bassinet lives by the couch now, the stroller sleeps in
the hall, and the cats have appointed themselves to his honor guard. The house
didn't make room for him. He became part of the house.

The closer rhymes with the opener and with the endings of both earlier films:
his face, the 85, eye contact held longer than ever — and a flicker at the
corner of his mouth that is almost, *almost* a smile. Cut to black on the
flicker. That's the tease. Everyone will watch week four for the payoff.

## Mood & look

Same film stock, more daylight. Everything that defined weeks one and two —
shallow 85/50 frames, the milky lifted blacks, warm highlights against
teal-leaning shadows, the whisper of halation and grain — carries straight
through, so the three films feel developed from one roll. What changes is the
air in the frames: week one was interiors and thresholds, week two was
lamplight and 3am; week three lets the sun in. Wider compositions, more
negative space with actual sky in it, greens and warm summer light entering
the palette for the first time.

The discipline that keeps it cinematic outdoors is the same one that kept it
cinematic at the window: 1/50 shutter, wide-ish apertures, and the variable ND
doing the sweating. Fast shutters would make the stroller walk look like a
camcorder; the ND is what lets Alberta sun and the filmic look coexist. Pace
follows the light — quicker, more buoyant cutting in the outing, then back to
the long patient holds the series is built on. It should feel like the moment
a held breath lets out.

## Prep & shoot-day plan

**Shoot around alert windows, and treat them like weather.** At three weeks
he'll give you a few 45–60 minute stretches of calm alertness a day, usually
after a feed, and you cannot schedule them — you can only be ready. So the
core trick of this week is the standing set: the play-mat corner stays
dressed all week, the tripod stays at shot-2 height in the corner, the a7CII
lives beside it with a charged battery, formatted card, WB locked, S-Log3
set, and yesterday's lens still mounted. When he wakes up bright, you should
be rolling inside thirty seconds. The eye shots (1, 2, 3, 15) and the
conversation pair (4, 5) are all harvested from these windows across the week
— never all in one day, and never by waking him or stretching a window that's
tipping into overtired. The shot list is a menu, not a contract.

**The outing is the week's mini-production — plan it like one.** Pick the
day by forecast: you want the golden-hour end of a clear evening or a soft
morning, not a windy noon. Feed him, then load: a7CII with the 28mm balanced
on the RS3 Mini *before* you leave (balance it in the living room, not on the
sidewalk), variable ND already on the lens, Pocket 3 in a jacket pocket,
X100VI over a shoulder. Roles are fixed: one parent drives and pushes, the
other operates — the camera never belongs to whoever's hands are responsible
for him. Shot order on location: the click at the car (8), drive footage from
the adjacent seat (8), then the stroller passes (9), then the two-minute
stills detour (10). The whole outing shoot is maybe twenty minutes inside a
walk you were taking anyway; when he's done, you're done.

**Weather backup:** if the week turns rainy, the outing compresses honestly —
the click, the drive, and a 28mm frame of the stroller parked at the open
front door with rain beyond becomes the "world" beat, and the X100VI shoots
raindrops on the car window instead of leaf shadows. The film still works;
"we tried to go out and Alberta had opinions" is a true week-three story.

**Batteries, cards, ND:** the marathon (11) and the standing set mean the
a7CII works scattered short sessions all day — top up the battery at every
nap, and keep the second one on the charger, not in a drawer. Slow-mo (shot
7) and 10-bit all-day shooting eat cards; offload every evening and confirm
the copy before formatting. Spin the variable ND to minimum before you go
back inside, and check it's *off* the lens for the window shots — a
forgotten ND indoors is the classic way to end up at ISO 12800 wondering why.
Evening shots (11's last take, 12, 13) are the sticks' only appearances this
week: both charged, both at 3200K, and both placed where nothing — cats
included — can send them anywhere near him.
