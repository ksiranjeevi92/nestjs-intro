'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' : 'data-bs-target="#xs-controllers-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' :
                                            'id="xs-controllers-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' : 'data-bs-target="#xs-injectables-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' :
                                        'id="xs-injectables-links-module-AppModule-517fc31617d5b6edd19c25f53c9491dcd530c0457cbc707529e083dcca7e5a79539983449a59cda5bcd4c2b7106b8f9c2664a0cbf70df95f21e40365ce75d471"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' :
                                            'id="xs-controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' :
                                        'id="xs-injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                            'id="xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                        'id="xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' :
                                            'id="xs-controllers-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' :
                                        'id="xs-injectables-links-module-UsersModule-c19e8e1e842afba7f0a549725a0330adcae7c2a85d43f5dc24eb90a20f3ca6d5dd3f57fee1edbc03f7d72d733095e80d10d320c6b13e55d3b3d6f848c30ea7d1"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMeataOptionsDto.html" data-type="entity-link" >CreatePostMeataOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/patchPostDto.html" data-type="entity-link" >patchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});