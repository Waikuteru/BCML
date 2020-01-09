import {
    Button,
    Col,
    Form,
    InputGroup,
    OverlayTrigger,
    Row,
    Tooltip
} from "react-bootstrap";

import React from "react";

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            cemu_dir: "",
            game_dir: "",
            load_reverse: false,
            update_dir: "",
            dlc_dir: "",
            site_meta: "",
            guess_merge: false,
            lang: "",
            no_cemu: false,
            wiiu: true,
            valid: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.formRef = React.createRef();
    }

    checkValid() {
        return (
            this.state.game_dir != "" &&
            this.state.update_dir != "" &&
            this.state.lang != "" &&
            (this.state.cemu_dir != "" || this.state.no_cemu) &&
            this.formRef.current.checkValidity()
        );
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.saving && this.props.saving) {
            if (!this.checkValid()) {
                this.setState({ valid: false }, () => this.props.onFail());
            } else {
                this.setState({ valid: true }, () => {
                    let { valid, ...settings } = this.state;
                    this.props.onSubmit(settings);
                });
            }
        }
    }

    handleChange(e) {
        try {
            e.persist();
        } catch (error) {}
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <Form
                noValidate
                validated={this.state.valid}
                onSubmit={this.handleSubmit}
                ref={this.formRef}>
                <h5>Game Folders</h5>
                <Row>
                    <Col>
                        <Form.Group controlId="cemu_dir">
                            <Form.Label>Cemu Directory</Form.Label>
                            <FolderInput
                                value={this.state.cemu_dir}
                                onChange={this.handleChange}
                                isValid={
                                    this.state.cemu_dir != "" ||
                                    this.state.no_cemu
                                }
                                overlay={
                                    <Tooltip>
                                        (Optional) The directory where Cemu is
                                        installed. Note that this <em>must</em>{" "}
                                        be the folder than directly contains
                                        "Cemu.exe" and "settings.xml"
                                    </Tooltip>
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                A Cemu folder is required unless you check the
                                no Cemu option
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="game_dir">
                            <Form.Label>Base Game Directory</Form.Label>
                            <FolderInput
                                value={this.state.game_dir}
                                onChange={this.handleChange}
                                isValid={this.state.game_dir != ""}
                                overlay={
                                    <Tooltip>
                                        The folder containing the base game
                                        files for BOTW, without the update or
                                        DLC files. The last folder should be
                                        "content", e.g.
                                        <br />
                                        <code>
                                            C:\Games\The Legend of Zelda Breath
                                            of the Wild [AZE01]\content
                                        </code>
                                    </Tooltip>
                                }
                                placement={"left"}
                            />
                        </Form.Group>
                        <Form.Control.Feedback type="invalid">
                            The BOTW dump folder is required
                        </Form.Control.Feedback>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="update_dir">
                            <Form.Label>Update Directory</Form.Label>
                            <FolderInput
                                value={this.state.update_dir}
                                onChange={this.handleChange}
                                isValid={this.state.update_dir != ""}
                                overlay={
                                    <Tooltip>
                                        The folder containing the update files
                                        for BOTW, version 1.5.0. The last folder
                                        should be "content", and if you use
                                        Cemu, it should be in your "mlc01"
                                        folder, e.g.
                                        <br />
                                        <code>
                                            C:\Cemu\mlc01\usr\title\0005000E\101C9400\content
                                        </code>
                                    </Tooltip>
                                }
                            />
                        </Form.Group>
                        <Form.Control.Feedback type="invalid">
                            The BOTW update folder is required
                        </Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group controlId="dlc_dir">
                            <Form.Label>DLC Directory</Form.Label>
                            <FolderInput
                                value={this.state.dlc_dir}
                                onChange={this.handleChange}
                                overlay={
                                    <Tooltip>
                                        (Optional) The folder containing the DLC
                                        files for BOTW, version 3.0. The last
                                        folder should usually be "0010", and if
                                        you use Cemu, it should be in your
                                        "mlc01" folder, e.g.
                                        <br />
                                        <code>
                                            C:\Cemu\mlc01\usr\title\0005000C\101C9400\content\0010
                                        </code>
                                    </Tooltip>
                                }
                                placement={"left"}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <h5>Options</h5>
                <Row>
                    <Col>
                        <Form.Group controlId="lang">
                            <Form.Label>Game Language</Form.Label>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip>
                                        The game language you play with. This
                                        will be prioritized when attempting to
                                        merge text mods.
                                    </Tooltip>
                                }>
                                <Form.Control
                                    as="select"
                                    value={this.state.lang}
                                    isValid={this.state.lang != ""}
                                    onChange={this.handleChange}>
                                    <option value={""}>
                                        Select a language
                                    </option>
                                    {LANGUAGES.map(lang => (
                                        <option value={lang} key={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </Form.Control>
                            </OverlayTrigger>
                            <Form.Control.Feedback type="invalid">
                                You must select a game language
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="no_cemu">
                            <OverlayTrigger
                                overlay={
                                    <Tooltip>
                                        Allows you to use BCML without Cemu on
                                        your PC. If you do this, you will be to
                                        be careful about getting the right
                                        directories for update and DLC files.
                                        You will be able to merge installed mods
                                        wiht Export.
                                    </Tooltip>
                                }
                                placement={"left"}>
                                <Form.Check
                                    type="checkbox"
                                    label="Use BCML without a Cemu installation"
                                    value={this.state.no_cemu}
                                    onChange={this.handleChange}
                                />
                            </OverlayTrigger>
                        </Form.Group>
                        <Form.Group controlId="guess_merge">
                            <OverlayTrigger
                                overlay={
                                    <Tooltip>
                                        Attempt to estimate proper RSTB values
                                        for merged AAMP files. Otherwise the
                                        entries will be deleted.
                                    </Tooltip>
                                }
                                placement={"left"}>
                                <Form.Check
                                    type="checkbox"
                                    label="Use RSTB estimation on merged files"
                                    value={this.state.guess_merge}
                                    onChange={this.handleChange}
                                />
                            </OverlayTrigger>
                        </Form.Group>
                        <Form.Group controlId="wiiu">
                            <OverlayTrigger
                                overlay={
                                    <Tooltip>
                                        Turn on Switch mode instead of Wii
                                        U/Cemu mode
                                    </Tooltip>
                                }
                                placement={"left"}>
                                <Form.Check
                                    type="checkbox"
                                    label="Use Switch mode"
                                    value={!this.state.wiiu}
                                    onChange={e =>
                                        this.setState({
                                            wiiu: !e.target.value,
                                            no_cemu: true
                                        })
                                    }
                                />
                            </OverlayTrigger>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        );
    }

    componentDidMount() {
        pywebview.api.get_settings().then(settings => this.setState(settings));
    }
}

class FolderInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            valid: false
        };
        this.idRef = React.createRef();
        this.folderPick = this.folderPick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({ value: this.props.value });
        this.id = this.idRef.current.id;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value != this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.value != this.state.value) {
            this.props.onChange({
                target: { id: this.id, value: this.state.value }
            });
            pywebview.api
                .dir_exists({ folder: this.state.value, type: this.id })
                .then(valid => this.setState({ valid }));
        }
    }

    folderPick() {
        pywebview.api
            .get_folder()
            .then(folder => this.setState({ value: folder }));
    }

    handleChange(e) {
        e.persist();
        this.setState({ value: e.target.value });
    }

    render() {
        const overlay = this.props.overlay;
        return (
            <InputGroup>
                <OverlayTrigger
                    overlay={overlay}
                    placement={this.props.placement || "right"}>
                    <Form.Control
                        placeholder="Select a directory"
                        value={this.state.value}
                        onChange={this.handleChange}
                        ref={this.idRef}
                        isValid={this.state.valid}
                    />
                </OverlayTrigger>
                <InputGroup.Append>
                    <Button variant="secondary" onClick={this.folderPick}>
                        Browse...
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

const LANGUAGES = [
    "USen",
    "EUen",
    "USfr",
    "USes",
    "EUde",
    "EUes",
    "EUfr",
    "EUit",
    "EUnl",
    "EUru",
    "CNzh",
    "JPja",
    "KRko",
    "TWzh"
];

export default Settings;