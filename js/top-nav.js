	<script src="./Pollen_files/hhy7tzm.js" type="text/javascript" async=""></script><script>
		window.pollenGlobals = {
			rootUrl: 'http://pollenlondon.com',
			templateUrl: 'http://pollenlondon.com/wp-content/themes/pollen',
			ajaxUrl: 'http://pollenlondon.com/wp-admin/admin-ajax.php',
			nonceID: 'ffba6de811',
			tumblrUrl: 'vastmix.com',
			tumblrApiKey: 'yLQQuAkOva5S1LKFuMLPPhrsqsFGnVNkV62MLDSLqvKgto9vNa'
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