fetch('https://api.ipify.org/')
.then(resp => resp.text())
.then(ip => {
  var ipTag = document.getElementById('ip-address')
  ipTag.innerHTML = ip;
  ipTag.href = `https://whatismyipaddress.com/ip/${ip}`;
});
