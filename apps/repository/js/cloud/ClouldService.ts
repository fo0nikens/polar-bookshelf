import {Firebase} from '../../../../web/js/firestore/Firebase';
import * as firebase from '../../../../web/js/firestore/lib/firebase';
import {Logger} from '../../../../web/js/logger/Logger';
import {PersistenceLayerManager} from '../../../../web/js/datastore/PersistenceLayerManager';

const log = Logger.create();

export class CloudService {

    private readonly persistenceLayerManager: PersistenceLayerManager;

    constructor(persistenceLayerManager: PersistenceLayerManager) {
        this.persistenceLayerManager = persistenceLayerManager;
    }

    public start() {

        Firebase.init();

        firebase.auth()
            .onAuthStateChanged((user) => this.onAuth(user),
                                (err) => this.onAuthError(err));

    }


    private onAuth(user: firebase.User | null) {

        console.log("onAuth: ", user);

        if (user != null) {
            log.info("Switching to cloud persistence layer");
            this.persistenceLayerManager.change('cloud');
        }

    }

    private onAuthError(err: firebase.auth.Error) {
        log.error("Authentication error: ", err);
    }

}