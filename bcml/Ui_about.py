# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'c:\Users\macad\Documents\Git\BCML-2\.vscode\about.ui',
# licensing of 'c:\Users\macad\Documents\Git\BCML-2\.vscode\about.ui' applies.
#
# Created: Sun Jul 28 19:58:30 2019
#      by: pyside2-uic  running on PySide2 5.12.3
#
# WARNING! All changes made in this file will be lost!

from PySide2 import QtCore, QtGui, QtWidgets

class Ui_AboutDialog(object):
    def setupUi(self, AboutDialog):
        AboutDialog.setObjectName("AboutDialog")
        AboutDialog.resize(276, 277)
        self.verticalLayout = QtWidgets.QVBoxLayout(AboutDialog)
        self.verticalLayout.setObjectName("verticalLayout")
        self.lblLogo = QtWidgets.QLabel(AboutDialog)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Preferred, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.lblLogo.sizePolicy().hasHeightForWidth())
        self.lblLogo.setSizePolicy(sizePolicy)
        self.lblLogo.setMinimumSize(QtCore.QSize(0, 108))
        self.lblLogo.setObjectName("lblLogo")
        self.verticalLayout.addWidget(self.lblLogo)
        self.label_2 = QtWidgets.QLabel(AboutDialog)
        self.label_2.setObjectName("label_2")
        self.verticalLayout.addWidget(self.label_2)
        self.lblVersion = QtWidgets.QLabel(AboutDialog)
        self.lblVersion.setObjectName("lblVersion")
        self.verticalLayout.addWidget(self.lblVersion)
        self.label_5 = QtWidgets.QLabel(AboutDialog)
        self.label_5.setTextFormat(QtCore.Qt.RichText)
        self.label_5.setObjectName("label_5")
        self.verticalLayout.addWidget(self.label_5)
        self.label = QtWidgets.QLabel(AboutDialog)
        self.label.setObjectName("label")
        self.verticalLayout.addWidget(self.label)
        self.label_3 = QtWidgets.QLabel(AboutDialog)
        self.label_3.setObjectName("label_3")
        self.verticalLayout.addWidget(self.label_3)
        self.label_4 = QtWidgets.QLabel(AboutDialog)
        self.label_4.setObjectName("label_4")
        self.verticalLayout.addWidget(self.label_4)
        self.horizontalLayout = QtWidgets.QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        spacerItem = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout.addItem(spacerItem)
        self.btnClose = QtWidgets.QPushButton(AboutDialog)
        self.btnClose.setObjectName("btnClose")
        self.horizontalLayout.addWidget(self.btnClose)
        self.verticalLayout.addLayout(self.horizontalLayout)

        self.retranslateUi(AboutDialog)
        QtCore.QMetaObject.connectSlotsByName(AboutDialog)

    def retranslateUi(self, AboutDialog):
        AboutDialog.setWindowTitle(QtWidgets.QApplication.translate("AboutDialog", "About BCML", None, -1))
        self.lblLogo.setText(QtWidgets.QApplication.translate("AboutDialog", "TextLabel", None, -1))
        self.label_2.setText(QtWidgets.QApplication.translate("AboutDialog", "A mod installer and manager for BotW mods on Cemu", None, -1))
        self.lblVersion.setText(QtWidgets.QApplication.translate("AboutDialog", "{version}", None, -1))
        self.label_5.setText(QtWidgets.QApplication.translate("AboutDialog", "<a href=\"https://gamebanana.com/tools/6624\">View on GameBanana</a> <a href=\"https://github.com/NiceneNerd/BCML\">View on GitHub</a>", None, -1))
        self.label.setText(QtWidgets.QApplication.translate("AboutDialog", "BCML © 2019 Caleb Smith, License: GPLv3+", None, -1))
        self.label_3.setText(QtWidgets.QApplication.translate("AboutDialog", "7z.exe © 2019 Ignor Pavolv, License: LGPLv3+", None, -1))
        self.label_4.setText(QtWidgets.QApplication.translate("AboutDialog", "msyt.exe © 2018 Kyle Clemens, License: MIT", None, -1))
        self.btnClose.setText(QtWidgets.QApplication.translate("AboutDialog", "Close", None, -1))

