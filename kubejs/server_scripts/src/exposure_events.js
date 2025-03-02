//priority: 100

/**
 * @file Exposure mod Event Handler
 */


ExposureEvents.modifyFrameData(event => {

  let nbt = event.getFrame();

  if (event.level.getLunarContext() !== null) {
    const event_string = event.level.getLunarContext().getLunarForecast().currentLunarEvent().key().location().toString();
    if (event_string === "enhancedcelestials:blood_moon" || event_string === "enhancedcelestials:super_blood_moon") {
      nbt['BloodMoon'] = true;
    }
  }

});
