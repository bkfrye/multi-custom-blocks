# Multi Custom Blocks plugin

These blocks are designed to work best with the latest [Twenty Twenty-Two](https://pcm.wordpress.org/themes/twentytwentytwo/]) WordPress theme. 

## Local Development
Run `npm install` to set up project for development. Type `npm start` to begin development server. 

WordPress environment was managed with [@wordpress/env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/).

## Information
This was architected with [@ryanwelcher/multiple-blocks-template](https://www.npmjs.com/package/@ryanwelcher/multiple-blocks-template). Great video on what is happening and why it was built can be [found here](https://www.youtube.com/watch?v=lwXXckW3dT0). 



## Issues
Largest issue I encountered was working with Buttons. I couldn't get the WP Button to do what I needed within the block. I am not sure if I missed something in the documentation, but trying getting that UX right for adding the button was a struggle. It does not perform the way I would like it to, but I will need to look into that more in the future. 

The next issue I had was dealing with using core components like groups/columns/column for adding the cards in an easy to manage layout. I ran into a few issues when deleting a card and then trying to add another one in since they would not insert the way I needed them. I ended up using groups to loosely do what I needed, but writing a custom block to help nest these cards properly will probably be needed. After I learn more about implementing columns/column in blocks, I feel as though I will find a better way by extending those components. 

The SVG provided was funky, so I pulled the right arrow from the NCSU brand guide. However, since I couldn't implement the button properly to use props like icon, href, etc... This was not implemented. 


## TODOs
- [ ] Add icons to better identify blocks
- [ ] Ensure min of one card in section and max of three cards 
- [ ] Include Image Card Section preview by setting up example in `block.json`
- [ ] Write custom button component to explicity control button text, HREF, icons, and types
- [ ] Add more controls and settings to image card
  - [ ] add overlay
  - [ ] ability to modify overlay opacity
- [ ] Update Image Card Section to better allow for layout. 
  - [ ] Set up proper adding/deleting of cards to maintain layout consistency if only one or two cards are used
- [ ] control styling from editor by limiting or removing format options