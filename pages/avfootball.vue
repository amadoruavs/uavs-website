<template>
  <section
    id="avfootballPage"
    class="has-text-centered"
    style="padding-top: 2rem"
  >
    <h1 class="title">AV Football Streaming</h1>
    <p style="margin-bottom: 1rem">
      AmadorUAVs does livestreams of each football game our sports teams
      participate in. Watch here:
    </p>
    <p class="subtitle" style="margin-bottom: 0.5rem">
      <b>Junior Varsity Game</b>
    </p>
    <p style="margin-bottom: 0.5rem">
      The Amador Valley Dons will face the Foothill Falcons on Saturday, April
      17th at 4:00 PM.
    </p>
    <div
      class="livestream-frame"
    >
      <iframe
        class="livestream-preview"
        src="https://www.youtube.com/embed/eamhEscD-Go"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <!--<iframe
        class="livestream-chat"
        allowfullscreen=""
        frameborder="0"
        src="https://www.youtube.com/live_chat?v=msREd27YXXc&embed_domain=amadoruavs.com"
      ></iframe
      >-->
      <br />
    </div>
    <br />
    <br />
    <!-- <p class="subtitle"><b>Freshman Game</b></p>
      <iframe style="width: 80vw; height: 45vw;" src="https://www.youtube.com/embed/kscDNfLxWbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      -->
    <p style="margin-top: 1rem; margin-bottom: 2rem">
      Older livestreams can be found archived
      <a
        href="https://www.youtube.com/playlist?list=PLj2ZpiiZsNz7cdf2MSgIVmPIc0Hlr1WKB"
        >here.</a
      >
    </p>
    <p class="subtitle"><b>Support Us</b></p>
    <p>
      It takes a lot to run our club and these livestreams. If you want to help
      support us,
      <a href="https://amadoruavs.com/sponsor/become">sponsor us</a> or mail a
      check to Amador Valley High School with "for AmadorUAVs" in the memo line.
    </p>
    <br />
    <br />
  </section>
</template>
<script>
export default {};
</script>
<style>
  .livestream-frame {
    display: flex;
    justify-content: center;
    background-color: black
  }
  .livestream-preview {
    width: 72vw;
    height: 40.5vw;
  }
  .livestream-chat {
    width: 20vw; 
    height: 40.5vw;
  }
  @media only screen and (max-width: 810px) {
    .livestream-chat {
        display: none;
    }
    .livestream-preview {
      width: 80vw;
      height: 45vw;
    }
}
</style>
