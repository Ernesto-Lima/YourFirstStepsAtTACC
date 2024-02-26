Transferring Files
==================

To practice transferring files to Frontera's ``$WORK`` and ``$SCRATCH``, we need to identify the path to our ``$WORK`` and ``$SCRATCH`` directory. 
To identify these paths, we can use helpful command shortcuts.

To identify the path to our ``$WORK`` directory, we can use ``cd $WORK`` or the helpful shortcut ``cdw``:

.. code-block:: console
   
   [frontera]$ cdw
   [frontera]$ pwd
   /work2/02555/lima/frontera

To identify the path to our ``$SCRATCH`` directory, we can use ``cd $SCRATCH`` or the helpful shortcut ``cds``:

.. code-block:: console
   
   [frontera]$ cds
   [frontera]$ pwd
   /scratch1/02555/lima/frontera

Copying files from your local computer to Frontera's ``$WORK`` would require the ``scp`` command (Windows users use the program "WinSCP"):

.. code-block:: console

   [local]$ scp my_file lima@frontera.tacc.utexas.edu:/work2/02555/lima/frontera
   (enter password)
   (enter token)

In this command, you specify the name of the file you want to transfer (``my_file``), the username (``lima``), the hostname (``frontera.tacc.utexas.edu``), 
and the path you want to put the file (``/work2/02555/lima/frontera``). Take careful notice of the separators including spaces, the @ symbol, and the colon. 

Copying files from your local computer to Frontera's ``$SCRATCH`` using ``scp``:

.. code-block:: console

   [local]$ scp my_file lima@frontera.tacc.utexas.edu:/scratch1/02555/lima/frontera
   (enter password)
   (enter token)

Copy files from Frontera to your local computer using the following:

.. code-block:: console

   [local]$ scp lima@frontera.tacc.utexas.edu:/work2/02555/lima/frontera/my_file ./
   (enter password)
   (enter token)

Note: If you wanted to copy ``my_file`` from ``$SCRATCH``, the path you would specify after the colon would be ``/scratch1/02555/lima/frontera/my_file``.
 
Instead of files, full directories can be copied using the "recursive" flag (``scp -r ...``). 

This is just the basics of copying files. See example ``scp`` usage `here-1 <https://en.wikipedia.org/wiki/Secure_copy>`_.

Exercise
^^^^^^^^

1. Identify which Lonestar6 login node you are on (login1, login2, login3)
2. Remotely login to a different Lonestar6 login node and list what files are available.
3. Logout until you are back to your original login node.
4. Make your own ``my_file`` on your local computer using knowledge from our previous sections and copy ``my_file`` to your ``$WORK`` file system on Lonestar6 

Review of Topics Covered
^^^^^^^^^^^^^^^^^^^^^^^^

+------------------------------------+-------------------------------------------------+
| Command                            |          Effect                                 |
+====================================+=================================================+
| ``cd $WORK``, ``cdw``              |  navigate to ``$WORK`` file system              |
+------------------------------------+-------------------------------------------------+
| ``cd $SCRATCH``, ``cds``           |  navigate to ``$SCRATCH`` file system           |
+------------------------------------+-------------------------------------------------+
| ``scp local remote``               |  copy a file from local to remote               |
+------------------------------------+-------------------------------------------------+
| ``scp remote local``               |  copy a file from remote to local               |
+------------------------------------+-------------------------------------------------+