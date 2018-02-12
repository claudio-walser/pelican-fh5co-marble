Description
-----------

**pelican-fh5co-marble** is a layout from https://freehtml5.co/ ported to pelican.



Features
--------

- Fully responsive
- Translation support
- Working contact form (sending is done in php)
- Integrated tipue_search Plugin
- Google Maps integration
- Disqus integration



Todo's for later version
------------------------

- ADs
- Google Analytics
- Facebook/Twitter share



Plugins
-------
- https://github.com/getpelican/pelican-plugins/tree/master/i18n_subsites
- https://github.com/getpelican/pelican-plugins/tree/master/tipue_search


Example blog
------------

You can find a fully working example under https://github.com/claudio-walser/pelican-fh5co-marble-example

.. code:: console

    git clone https://github.com/claudio-walser/pelican-fh5co-marble.git
    git clone https://github.com/claudio-walser/pelican-fh5co-marble-example.git
    cd pelican-fh5co-marble-example
    pelican
    ./develop_server.sh start 8081

Then visit http://localhost:8081 with your browser.



Credits
-------
- Layout by https://freehtml5.co/
- Example Images by David Kaplan http://www.kplan.ch/
- And thanks to Alexandre Vicenzi, creator of the great Flex theme for many impressions and how to's https://github.com/alexandrevicenzi/Flex



Issues or feature-requests
--------------------------

If you discover any bugs, feel free to create an issue on GitHub or fork
and send me a pull request.

`Issues List`_.



Authors
-------

-  Claudio Walser (https://github.com/claudio-walser)



License
-------

https://creativecommons.org/licenses/by/3.0/


.. _Issues List: https://github.com/claudio-walser/pelican-fh5co-marble-example/issues


































Additional Config Parameters
- LOGO
- DISPLAY_PAGES_ON_HOME
- ABOUT = {
  'image': 'images/about.jpeg',
  'mail': 'info@gitcd.io',
  'text': 'Learn more about the creator of gitcd or just drop a message.',
  'link': 'pages/contact.html'
}
- DISQUS_SHORTNAME = 'gitcd-dev'
- DISQUS_ON_PAGES = True

Additional Page Options
- icon
- order (for the right order in the navigation and page overwie on the home page)
- use_disqus True

Additional Article Option
- image


TODO
- archives page
- ads (even if i dont like them)
