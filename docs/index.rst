.. Intro to HPC @ TACC documentation master file, created by
   sphinx-quickstart on Fri Jun 26 14:44:16 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Your First Steps at TACC
=============================

The workshop is designed to introduce skills required to perform computational
research in domain sciences. It will provide an overview of essential tasks 
related to utilizing TACC resources effectively. This workshop is intended for
people who have little to no experience with a command line interface, but intend
to use a Linux workstation or HPC cluster for domain science research.

This workshop will be fully interactive. Participants are **strongly encouraged** to follow along on the command line.

In this workshop, we use:

.. code-block:: console

   [local]$

for commands on the local system and:

.. code-block:: console

   [frontera]$ 
   
for commands on the remote system consistently throughout.

Requirements
------------

To participate in this workshop, you will need a TACC account and must have set up multi-factor authentication using a token app or SMS. 
You can do this by visiting the `TACC portal <https://tacc.utexas.edu/portal/dashboard/>`_, logging in, clicking on your username at the top right of the page, 
selecting "Manage Account", and, under MFA Pairing, clicking to pair. You can find more details about MFA Pairing `here <https://docs.tacc.utexas.edu/basics/mfa/>`_.

In your **TACC portal**, you can also view your allocations, open tickets, and the systems along with their current status.

Tips for Success
----------------

Read the `documentation <https://docs.tacc.utexas.edu/>`_.

* Learn node schematics, limitations, file systems, rules
* Learn about the scheduler, queues, policies
* Determine the right resource for the job

User Responsibility on Shared Resources
---------------------------------------

HPC systems are shared resources. Your jobs and activity on a cluster, if mismanaged,
can affect others. TACC staff are always `available to help <https://www.tacc.utexas.edu/about/help/>`_.

.. toctree::
   :maxdepth: 1
   :caption: Contents:

   steps_at_tacc/requesting
   steps_at_tacc/connecting
   steps_at_tacc/transferring
   steps_at_tacc/managing
   steps_at_tacc/running
   steps_at_tacc/understanding
   steps_at_tacc/executing

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
