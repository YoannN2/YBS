<script>
  import BaseFooter from '$lib/BaseFooter.svelte'

  let notif = {}

  function notify (e) {
    Notification.requestPermission().then( permission => {
      if (permission === "granted") {
        notif = new Notification("Hello World", {
          body: "This is more text",
          data: {opened: true},
          tag: "thing"
        })

        // notif.addEventListener("close", e => {
        //   alert("CLOSED")
        //   notif.data.opened = false
        //   notif = notif
        // })
      }
    })
  }

</script>

<pre>{JSON.stringify(notif.data, null, 2)}</pre>

<div class="">
  <button type="button" name="button" on:click="{notify}">Notify</button>
</div>
