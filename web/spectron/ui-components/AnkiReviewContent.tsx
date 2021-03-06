import * as React from 'react';
import {Ref} from '../../js/metadata/Refs';
import {AnnotationType} from '../../js/metadata/AnnotationType';
import {CommentComponent} from '../../js/annotation_sidebar/child_annotations/CommentComponent';
import {DocAnnotation} from '../../js/annotation_sidebar/DocAnnotation';
import {HTMLString} from '../../js/util/HTMLString';
import {Screenshot} from '../../js/metadata/Screenshot';
import {Point} from '../../js/Point';
import {ISODateTimeString} from '../../js/metadata/ISODateTimeStrings';
import {Comment} from '../../js/metadata/Comment';
import {HighlightColor} from '../../js/metadata/BaseHighlight';
import {PageMeta} from '../../js/metadata/PageMeta';
import {Proxies} from '../../js/proxies/Proxies';
import {MockDocMetas} from '../../js/metadata/DocMetas';
import {FlashcardComponent} from '../../js/annotation_sidebar/child_annotations/FlashcardComponent';
import Button from 'reactstrap/lib/Button';

export class AnkiReviewContent extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {

        return (

            <div className="border rounded m-2" style={{width: '450px'}}>

                <div className="text-center p-3">
                    <h3>Enjoying <b>Anki Sync</b> with Polar?</h3>
                </div>

                <p className="text-justify mb-2 pl-2 pr-2">

                    How are we doing? Is the <b>Anki sync</b> functionality in Polar
                    working for you?

                </p>

                <div className="border-top border-bottom ml-2 mr-2 mb-10 p-3 text-center">

                    <div style={{display: 'flex'}}>
                        <StarButton/>
                        <StarButton/>
                        <StarButton/>
                        <StarButton/>
                        <StarButton/>
                    </div>

                </div>

                <div className="text-right p-1">
                    <Button color="primary">Later</Button>
                </div>

            </div>

        );
    }

}


interface IProps {
}

interface IState {

}

export class StarButton extends React.Component<StarButtonProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {

        return (

            <Button color="light m-1">
                <i style={{fontSize: '40px'}} className="fas fa-star"></i>
            </Button>

        );
    }

}

interface StarButtonProps {

}
