<script lang="ts" setup>
const mail = ref('');
// function clearField(){
//     mail.value = ''
// }
</script>

<template>
    <div id="mc_embed_signup" class="wfull! max-w140 2md:w100!">
        <form action="https://gmail.us17.list-manage.com/subscribe/post?u=c8549af6b66b6479ab30cdc1f&amp;id=f64aae2782&amp;f_id=00fec2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
            <div id="mc_embed_signup_scroll" class="flex flex-col">
                <!-- <div>
                    <h3 class="mb2 text-e-primary fw500">Subscribe to Newsletter</h3>
                </div> -->
                <div class="mc-field-group flex">
                    <input v-model="mail" type="email" name="EMAIL" class="wfull email border border-e-primary px4 py3 outline-none! placeholder-text-3.5 text-3.5" placeholder="Subscribe to Newsletter..." id="mce-EMAIL" required>
                    <button type="submit" id="mc-embedded-subscribe" class="button bg-e-primary! px3 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#fff" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg></button> 
                </div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display: none;"></div>
                    <div class="response" id="mce-success-response" style="display: none;"></div>
                </div>
                <div aria-hidden="true" style="position: absolute; left: -5000px;" class="">
                    /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                    <input type="text" name="b_c8549af6b66b6479ab30cdc1f_f64aae2782" tabindex="-1" value="">
                </div>
                <!-- <div class="optionalParent border-2 border-red">
                    <div class="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                    </div>
                </div> -->
            </div>
        </form>
    </div>
</template>

<style>
#mc_embed_signup{
    background:#fff;
    clear:left; 
    font:14px; 
    width: 600px;
}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>