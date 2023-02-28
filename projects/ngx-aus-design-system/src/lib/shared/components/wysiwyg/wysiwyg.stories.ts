import { RouterTestingModule } from '@angular/router/testing';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';

import { WysiwygComponent } from './wysiwyg.component';

export default {
  title: 'WYSIWYG',
  component: WysiwygComponent,
  decorators: [
    moduleMetadata({
      declarations: [WysiwygComponent, SanitizePipe],
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<WysiwygComponent> = (args: WysiwygComponent) => ({
  props: args,
});

const data =
  '<h1>Aramark Uniform Services Wins Two NAUMD Image of the Year Awards</h1><h5 style="text-align: left;">Aramark Uniform Services was recognized by the Network Association of Uniform Manufacturers and Distributors (NAUMD) for uniform redesigns for Iron Mountain and Sysco in the following categories:</h5><h6>Transportation: Shipping and Delivery &#8211; Iron Mountain</h6><hr /><p><em>The Iron Mountain uniforms were designed for the Transportation and Operations teams.</em> The new uniform program addresses safety concerns for drivers and warehouse personnel, and provides comfort to employees in various environments and settings. <strong>Aramark <em>Uniform</em> Services</strong> customized an all-new, Iron Mountain-branded, uniform solution consisting of enhanced visibility polos, T-shirts, pants, shorts, outerwear, rainwear and hats.</p><h6>Safety and Industrial: High Visibility &#8211; Sysco</h6><p>The Uniform Services team designed a branded line of uniform solutions that could be rolled out nationwide in varying climates. The line is centered around a core item, a collared polo. The solution incorporates comfort, easy care and safety into the most visible component of their branded program.</p><p>Each year, the Image Apparel Institute recognizes the best workplace apparel programs with its Image of the Year Awards®. Programs are judged on originality of design, projection of branding, functionality for the job, and use of technology and innovation.</p><p>NAUMD received 98 award submissions in 2022 from 38 different uniform companies.</p><div id="attachment_349" style="width: 1376px" class="wp-caption aligncenter"><img aria-describedby="caption-attachment-349" loading="lazy" class="wp-image-349 size-full" src="http://www-aramarkuniform-com-develop.go-vip.net/wp-content/uploads/2022/09/Aramark-ABS-Video-Photos-334-4.jpg" alt="This is a test" width="1366" height="477" data-wp-editing="1" srcset="https://www-aramarkuniform-com-develop.go-vip.net/wp-content/uploads/2022/09/Aramark-ABS-Video-Photos-334-4.jpg 1366w, https://www-aramarkuniform-com-develop.go-vip.net/wp-content/uploads/2022/09/Aramark-ABS-Video-Photos-334-4.jpg?resize=300,105 300w, https://www-aramarkuniform-com-develop.go-vip.net/wp-content/uploads/2022/09/Aramark-ABS-Video-Photos-334-4.jpg?resize=768,268 768w, https://www-aramarkuniform-com-develop.go-vip.net/wp-content/uploads/2022/09/Aramark-ABS-Video-Photos-334-4.jpg?resize=1024,358 1024w" sizes="(max-width: 1366px) 100vw, 1366px" /><p id="caption-attachment-349" class="wp-caption-text">Caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p></div><ul><li>Item 1<ul><li>Subitem 1</li><li>Subitem 2</li></ul></li><li>Item 2</li><li>Item 3</li></ul><ol><li>Item 1<ol><li>Subitem 1<ol><li>Subitem 1</li></ol></li><li>Subitem 2</li></ol></li><li>Item 2</li><li>Item 3</li></ol><p>Lorem ipsum and <a href="https://www-aramarkuniform-com-develop.go-vip.net/chris-test-page/">this is a link</a> dolor <a href="#" class="armk-link-red">sit</a> amet consectetur adipiscing elit.</p><pre>And this is preformatted content, whatever that means...</pre><p>&nbsp;</p><p style="text-align: left;">This is left-aligned</p><p style="text-align: center;">This is center-aligned</p><p style="text-align: right;">This is right-aligned</p><p>T̶h̶i̶s̶ ̶t̶e̶x̶t̶ ̶h̶a̶s̶ ̶a̶ ̶s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶</p><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac magna nec lorem vehicula malesuada non non nisi. Praesent vel mauris id urna feugiat vestibulum in sed nunc. Duis condimentum arcu vel viverra placerat. Suspendisse faucibus at mauris nec dapibus lorem vehicula.</p></blockquote><p>Sint ipsum et dolor dolore fugiat eu nulla occaecat velit. Reprehenderit deserunt nostrud anim ut aliqua nostrud sit ad. Exercitation excepteur deserunt sit voluptate in dolor incididunt est non fugiat amet in.</p><p><img src="https://api.lorem.space/image?w=200&h=200" class="alignleft" /></p><p>Sint ipsum et dolor dolore fugiat eu nulla occaecat velit. Reprehenderit deserunt nostrud anim ut aliqua nostrud sit ad. Exercitation excepteur deserunt sit voluptate in dolor incididunt est non fugiat amet in.</p><p>Ipsum fugiat aliqua nisi proident sint aute eu enim nostrud anim aute qui Lorem. Fugiat consectetur anim sit mollit id nulla cupidatat. Qui dolor cillum mollit officia Lorem irure deserunt fugiat eiusmod excepteur tempor adipisicing enim.</p><p>Ut sit irure Lorem est exercitation. Nostrud cillum occaecat exercitation Lorem. In irure elit nostrud anim dolore amet qui ea id ad in incididunt aliqua. Magna adipisicing eu dolor enim nulla incididunt.</p><a class="armk-btn-red">Button</a><span class="armk-icon armk-bg-black armk-icon-size-xs"><span class="icon-insight"></span></span><span class="armk-icon armk-bg-white armk-icon-size-sm"><span class="icon-towel"></span></span><span class="armk-icon armk-bg-transparent armk-icon-size-md aligncenter"><span class="icon-box"></span></span><span class="armk-icon armk-bg-black armk-icon-size-lg alignright"><span class="icon-utensils"><span class="armk-icon-hide">&nbsp;</span></span></span><p>Consectetur nulla ut occaecat fugiat sunt.</p>';

export const Article = Template.bind({});
Article.args = {
  data,
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  fullwidth: true,
  data,
};

export const Black = Template.bind({});
Black.args = {
  data,
  bgColor: 'black',
};

export const Gray = Template.bind({});
Gray.args = {
  data,
  bgColor: 'gray',
};
