
		window.enflightdesign = {
			ajaxUrl: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
		};


		(function() {
			var config = {
				kitId: 'hhy7tzm',
				scriptTimeout: 3000
			};
			var h = document.getElementsByTagName('html')[0];
			h.className += ' wf-loading';
			var t = setTimeout(function() {
				h.className = h.className.replace(/(\s|^)wf-loading(\s|$)/g, ' ');
				h.className += ' wf-inactive';
			}, config.scriptTimeout);
			var d = false;
			var tk = document.createElement('script');
			tk.src = '//use.typekit.net/' + config.kitId + '.js';
			tk.type = 'text/javascript';
			tk.async = 'true';
			tk.onload = tk.onreadystatechange = function() {
				var rs = this.readyState;
				if (d || rs && rs != 'complete' && rs != 'loaded') return;
				d = true;
				clearTimeout(t);
				try { Typekit.load(config); } catch (e) {}
			};
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(tk, s);
		})();
	</script>